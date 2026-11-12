// 色見本ページ preview/palette.html を生成する（生成物は gitignore）。
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import * as H from "../src/hues.mjs";
import S from "../src/semantic.mjs";
import { hexToOklab } from "../src/color.mjs";
// hues.mjs の export のうち色相スケール（関数）を、無彩色寄り → 色相角の順に並べる
const hueAngle = (name) => {
  const { a, b } = hexToOklab(H[name](500));
  return Math.hypot(a, b) < 0.03 ? -1 : (Math.atan2(b, a) * 180) / Math.PI + (b < 0 ? 360 : 0);
};
const hues = Object.keys(H)
  .filter((k) => k !== "stepOf" && typeof H[k] === "function")
  .sort((x, y) => hueAngle(x) - hueAngle(y) || x.localeCompare(y));
const steps = Array.from({ length: 21 }, (_, i) => i * 50);
const txt = (hex) => (hexToOklab(hex).L > 0.62 ? "#2a211d" : "#fbfaf8");
const head = `<tr><th></th>${steps.map((s) => `<th>${s}</th>`).join("")}</tr>`;
const rows = hues.map((h) => `<tr><th scope="row">${h}</th>${steps.map((s) => { const c = H[h](s); return `<td style="background:${c};color:${txt(c)}" title="${h}(${s}) ${c}"><span>${c.slice(1)}</span></td>`; }).join("")}</tr>`).join("\n");
const roleGroup = (name, obj) => `<section class="group"><h3>${name}</h3><ul>${Object.entries(obj).map(([k, c]) => `<li><i style="background:${c}"></i><code>${k}</code><span class="hex">${c}</span></li>`).join("")}</ul></section>`;
const sy = S.syntax, ui = S.ui;
const code = `<span style="color:${sy.storage}">import</span> <span style="color:${sy.punctuation}99">{</span> <span style="color:${sy.variable}">alpha</span> <span style="color:${sy.punctuation}99">}</span> <span style="color:${sy.keyword}">from</span> <span style="color:${sy.string}">"./color.mjs"</span><span style="color:${sy.punctuation}99">;</span>
<span style="color:${sy.comment}b3"><em>// 背景より少し明るいウィジェット</em></span>
<span style="color:${sy.storage}">export</span> <span style="color:${sy.storage}">function</span> <span style="color:${sy.function}">widget</span><span style="color:${sy.punctuation}99">(</span><span style="color:${sy.decorator}">step</span><span style="color:${sy.punctuation}99">:</span> <span style="color:${sy.type}">number</span><span style="color:${sy.punctuation}99">)</span> <span style="color:${sy.punctuation}99">{</span>
  <span style="color:${sy.keyword}">if</span> <span style="color:${sy.punctuation}99">(</span><span style="color:${sy.decorator}">step</span> <span style="color:${sy.keyword}">&gt;</span> <span style="color:${sy.property}">1000</span><span style="color:${sy.punctuation}99">)</span> <span style="color:${sy.keyword}">return</span> <span style="color:${sy.constant}">null</span><span style="color:${sy.punctuation}99">;</span>
  <span style="color:${sy.keyword}">return</span> <span style="color:${sy.plain}">gray</span><span style="color:${sy.punctuation}99">(</span><span style="color:${sy.decorator}">step</span><span style="color:${sy.punctuation}99">).</span><span style="color:${sy.property}">length</span><span style="color:${sy.punctuation}99">;</span>
<span style="color:${sy.punctuation}99">}</span>`;
const html = `<title>Mochi Light Palette</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+JP:wght@400;500;600&display=swap">
<style>
/* Layout: one column — hue ladder table, theme preview, semantic role lists */
:root{
  --bg:${ui.bg}; --surface:${ui.bgWidget}; --fg:${ui.fg}; --muted:${ui.fgMuted}; --line:${ui.border}; --accent:${ui.accent};
  --sans:"IBM Plex Sans JP",system-ui,sans-serif; --mono:"IBM Plex Mono",ui-monospace,monospace;
}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--bg:#1d1a18;--surface:#262220;--fg:#ece6e1;--muted:#a59b93;--line:#3a3431;--accent:#4fb3b5;color-scheme:dark}}
:root[data-theme="dark"]{--bg:#1d1a18;--surface:#262220;--fg:#ece6e1;--muted:#a59b93;--line:#3a3431;--accent:#4fb3b5;color-scheme:dark}
body{background:var(--bg);color:var(--fg);font-family:var(--sans);line-height:1.6}
main{max-width:1180px;margin:0 auto;padding-block:40px 64px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px));display:grid;gap:40px}
h1{font-size:1.75rem;font-weight:600;margin:0;text-wrap:balance}
h2{font-size:1.1rem;font-weight:600;margin:0 0 12px}
h3{font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:0 0 8px;font-weight:500}
p.lead{margin:6px 0 0;color:var(--muted);max-width:65ch}
code,.hex{font-family:var(--mono);font-size:.8rem}
.scroll{overflow-x:auto;border:1px solid var(--line);border-radius:6px}
table{border-collapse:collapse;font-family:var(--mono);font-size:.68rem;font-variant-numeric:tabular-nums;min-width:960px;width:100%}
th{font-weight:500;color:var(--muted);padding:6px 4px;text-align:center;background:var(--surface)}
th[scope=row]{text-align:left;padding-left:10px;position:sticky;left:0;z-index:1}
td{height:44px;padding:0;text-align:center;vertical-align:bottom}
td span{display:block;padding:0 2px 4px;opacity:.75}
.preview{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:16px}
.win{border-radius:8px;overflow:hidden;border:1px solid ${ui.border};background:${ui.bg};color:${ui.fg};min-width:0}
.win .bar{background:${ui.bgTitleBar};padding:6px 12px;font-size:.75rem;color:${ui.fg}99}
.win .body{display:grid;grid-template-columns:120px 1fr}
.win .side{background:${ui.bgSideBar};border-right:1px solid ${ui.border};padding:10px;font-size:.75rem;display:grid;gap:4px;align-content:start}
.win .side .on{background:${ui.accent}33;color:${ui.fg};border-radius:3px;padding:0 4px}
.win .side span{padding:0 4px;color:${ui.fg}cc}
.win pre{margin:0;padding:12px 14px;font-family:var(--mono);font-size:.78rem;line-height:1.7;overflow-x:auto;min-width:0}
.win .status{background:${ui.bg};border-top:1px solid ${ui.border};font-size:.7rem;padding:3px 12px;color:${ui.fg}80;display:flex;gap:12px}
.win .status b{color:${S.status.error};font-weight:500}.win .status em{color:${S.status.warning};font-style:normal}
.groups{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:24px}
.group ul{list-style:none;margin:0;padding:0;display:grid;gap:3px}
.group li{display:grid;grid-template-columns:18px 1fr auto;gap:8px;align-items:center;min-width:0}
.group li i{width:18px;height:18px;border-radius:4px;box-shadow:inset 0 0 0 1px #0000001f}
.group code{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.hex{color:var(--muted)}
</style>
<main>
<header><h1>Mochi Light Palette</h1><p class="lead">色相ごとのスケール（段階 0〜1000、同じ段階は同じ OKLCH 明度）と、そこから割り当てたセマンティックカラー。gray(100) = 背景、brown(900) = 文字。</p></header>
<section><h2>ベース（hues.mjs）</h2><div class="scroll"><table>${head}\n${rows}</table></div></section>
<section><h2>プレビュー</h2><div class="preview"><div class="win"><div class="bar">mochi-theme — widget.ts</div><div class="body"><div class="side"><span class="on">widget.ts</span><span>color.mjs</span><span>hues.mjs</span><span>semantic.mjs</span></div><pre>${code}</pre></div><div class="status"><span>main</span><b>✕ 1</b><em>⚠ 2</em></div></div></div></section>
<section><h2>セマンティック（semantic.mjs）</h2><div class="groups">${roleGroup("tone", S.tone)}${roleGroup("ui", S.ui)}${roleGroup("syntax", S.syntax)}${roleGroup("status", S.status)}${roleGroup("diff", S.diff)}${roleGroup("ansi", S.ansi)}</div></section>
</main>`;
const outDir = fileURLToPath(new URL("../preview/", import.meta.url));
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}palette.html`, html);
console.log(`built ${outDir}palette.html`);
