// ベースカラー（色相別）。HEX を書くのはこのファイルだけ。
//
// 各色相は「段階番号 → 色」の関数。例: gray(100), teal(600)
//   - 段階 0 は背景側の端（ライト = 白、ダーク = 最も暗い）。数字が大きいほど文字色に近づく。
//     ダークはライトのカーブを明度方向に鏡像にしたもので、同じ段階番号が同じ役割になる
//     （どちらも gray(100) = エディタ背景、brown(900) = 文字色）。
//   - 同じ段階なら、どの色相でも OKLCH 明度が同じになる。
//   - 25 刻みを目安に使う（任意の数値も可）。

import { lightnessCurve, mirroredCurve, scale, grayScale } from "./color.mjs";

// 有彩色の基準色（色相と彩度だけを使う。明度はカーブで決まる）。ライト・ダーク共通。
const BASES = {
  red: "#d24545",
  orange: "#e97500",
  yellow: "#d29d00",
  lime: "#72a317",
  green: "#12a349",
  teal: "#099da0",
  cyan: "#0ab1d2",
  blue: "#1197f0",
  violet: "#6d5ad9",
  purple: "#ae6cbe",
};

/**
 * @param {object} o
 * @param {string} o.bg  gray(100) = エディタ背景（そのままの値で出力される）
 * @param {string} o.fg  brown(900) = 文字色（そのままの値で出力される）
 * @param {string} o.mid gray の中間で向かう色味（背景側の色味からここへ移る）
 * @param {ReturnType<typeof lightnessCurve>} [o.mirrorOf] 指定するとこのカーブの鏡像を使う（ダーク）
 */
function makeHues({ bg, fg, mid, mirrorOf }) {
  const anchors = { 100: bg, 900: fg };
  const L = mirrorOf ? mirroredCurve(mirrorOf, anchors) : lightnessCurve(anchors);
  const hues = {
    gray: grayScale(L, { near: bg, far: mid }),
    brown: scale(L, fg),
  };
  for (const [name, base] of Object.entries(BASES)) hues[name] = scale(L, base);
  /** 明度 → 段階番号（パレット調整用） */
  hues.stepOf = L.stepOf;
  hues.curve = L;
  return hues;
}

// 明るい側は背景の寒色、中間で暖色へ。それより暗い側は彩度を抑える。
export const light = makeHues({ bg: "#f0f1f4", fg: "#432922", mid: "#988c82" });

// ライトの鏡像。暗い側は背景の寒色、中間で暖色へ。文字色は餅のような暖かい白。
export const dark = makeHues({ bg: "#1f2127", fg: "#ebdfd6", mid: "#8a7e75", mirrorOf: light.curve });
