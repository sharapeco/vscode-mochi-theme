// 色計算ヘルパー（依存なし）。OKLab / OKLCH は https://bottosson.github.io/posts/oklab/ に準拠。

// ── HEX ⇄ sRGB ⇄ OKLab ─────────────────────────────

const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const fromLinear = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

function parseHex(hex) {
  const m = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!m) throw new Error(`invalid color: ${hex}`);
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => v / 255);
}

/** "#rrggbb" → { L, a, b } */
export function hexToOklab(hex) {
  const [r, g, b] = parseHex(hex).map(toLinear);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return {
    L: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    a: 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    b: 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  };
}

/** { L, a, b } → 線形でない sRGB [r, g, b]（0〜1 の範囲外もありうる） */
function oklabToRgb({ L, a, b }) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960771 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map(fromLinear);
}

const EPS = 1e-4;
const inGamut = (rgb) => rgb.every((v) => v >= -EPS && v <= 1 + EPS);

/** { L, a, b } → "#rrggbb"。sRGB に収まらなければ色相と明度を保ったまま彩度を下げる。 */
export function oklabToHex(lab) {
  let rgb = oklabToRgb(lab);
  if (!inGamut(rgb)) {
    let lo = 0;
    let hi = 1;
    for (let i = 0; i < 30; i++) {
      const k = (lo + hi) / 2;
      if (inGamut(oklabToRgb({ L: lab.L, a: lab.a * k, b: lab.b * k }))) lo = k;
      else hi = k;
    }
    rgb = oklabToRgb({ L: lab.L, a: lab.a * lo, b: lab.b * lo });
  }
  return (
    "#" +
    rgb
      .map((v) => Math.round(Math.min(1, Math.max(0, v)) * 255).toString(16).padStart(2, "0"))
      .join("")
  );
}

// ── 透明度 ─────────────────────────────────────────

/**
 * 色に透明度を付ける。
 * @param {string} hex "#rrggbb"
 * @param {number} a 0〜1
 * @returns {string} "#rrggbbaa"
 */
export function alpha(hex, a) {
  parseHex(hex);
  if (a < 0 || a > 1) throw new Error(`alpha(): out of range ${a}`);
  return hex + Math.round(a * 255).toString(16).padStart(2, "0");
}

// ── 段階スケール ───────────────────────────────────

/**
 * 段階番号（0=白 … 大きいほど暗い）→ OKLCH 明度 のカーブを作る。
 * L(step) = 1 − k·(step/1000)^γ。2つのアンカー色がちょうどその段階に来るよう k と γ を決める。
 * @param {Record<number, string>} anchors 例: { 100: bg, 900: fg }
 */
export function lightnessCurve(anchors) {
  const [[s1, c1], [s2, c2]] = parseAnchors(anchors);
  const d1 = 1 - hexToOklab(c1).L;
  const d2 = 1 - hexToOklab(c2).L;
  const gamma = Math.log(d2 / d1) / Math.log(s2 / s1);
  const k = d1 / (s1 / 1000) ** gamma;
  const curve = (step) => {
    checkStep(step);
    return 1 - k * (step / 1000) ** gamma;
  };
  /** 明度 → 段階番号（逆関数） */
  curve.stepOf = (L) => 1000 * ((1 - L) / k) ** (1 / gamma);
  return curve;
}

/**
 * 既存のカーブを明度方向に線形変換して、別の2色をアンカーにしたカーブを作る（ダークテーマ用）。
 * 段階どうしの明度差の比率が元のカーブと同じになるので、ライトと同じ段階番号を同じ感覚で使える。
 * アンカーの明暗が逆なら、段階 0 は黒側・大きいほど明るいカーブになる。範囲外の明度は 0〜1 に丸める。
 * @param {ReturnType<typeof lightnessCurve>} base
 * @param {Record<number, string>} anchors base と同じ段階番号で指定する。例: { 100: darkBg, 900: lightFg }
 */
export function mirroredCurve(base, anchors) {
  const [[s1, c1], [s2, c2]] = parseAnchors(anchors);
  const [b1, b2] = [base(s1), base(s2)];
  const [t1, t2] = [hexToOklab(c1).L, hexToOklab(c2).L];
  const m = (t2 - t1) / (b2 - b1);
  const curve = (step) => {
    checkStep(step);
    return Math.min(1, Math.max(0, t1 + (base(step) - b1) * m));
  };
  curve.stepOf = (L) => base.stepOf(b1 + (L - t1) / m);
  return curve;
}

const parseAnchors = (anchors) => Object.entries(anchors).map(([s, c]) => [Number(s), c]);
const checkStep = (step) => {
  if (!(step >= 0 && step <= 1000)) throw new Error(`step out of range: ${step}`);
};

/** 基準明度 refL より明るければ白へ、暗ければ黒へ向かって彩度を 0 にする係数 */
const chromaFactor = (L, refL) => (L >= refL ? (1 - L) / (1 - refL) : L / refL);

/**
 * 有彩色のスケール。基準色の色相・彩度を保ち、明度だけをカーブに合わせる。
 * 基準より明るい段階は白に向かって彩度を 0 へ、暗い段階は L に比例して彩度を下げる
 * （暗くしても色が強くならないように）。
 * @returns {(step: number) => string}
 */
export function scale(curve, base) {
  const o = hexToOklab(base);
  return (step) => {
    const L = curve(step);
    const f = chromaFactor(L, o.L);
    return oklabToHex({ L, a: o.a * f, b: o.b * f });
  };
}

/**
 * グレーのスケール。段階 0 〜 near（背景側）までは near の色味、near → far の間で
 * far の色味へ OKLab 上で直線的に移る（途中で無彩色を経由する）。far より先は彩度を抑える。
 * 領域は段階番号で判定するので、ライト（大きいほど暗い）でもダーク（大きいほど明るい）でも使える。
 * @returns {(step: number) => string}
 */
export function grayScale(curve, { near, far }) {
  const p = hexToOklab(near);
  const q = hexToOklab(far);
  const sp = curve.stepOf(p.L);
  const sq = curve.stepOf(q.L);
  return (step) => {
    const L = curve(step);
    let a, b;
    if (step <= sp) {
      const f = chromaFactor(L, p.L);
      [a, b] = [p.a * f, p.b * f];
    } else if (step <= sq) {
      const t = (p.L - L) / (p.L - q.L);
      [a, b] = [p.a + (q.a - p.a) * t, p.b + (q.b - p.b) * t];
    } else {
      const f = chromaFactor(L, q.L);
      [a, b] = [q.a * f, q.b * f];
    }
    return oklabToHex({ L, a, b });
  };
}
