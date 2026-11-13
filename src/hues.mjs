// ベースカラー（色相別）。HEX を書くのはこのファイルだけ。
//
// 各色相は「段階番号 → 色」の関数。例: gray(100), teal(600)
//   - 段階は 0（白）〜 1000（最も暗い）。数字が大きいほど暗い。
//   - 同じ段階なら、どの色相でも OKLCH 明度が同じになる。
//   - 25 刻みを目安に使う（任意の数値も可）。

import { lightnessCurve, scale, grayScale } from "./color.mjs";

// 明度カーブのアンカー。この2色は必ずそのままの値で出力される。
const BG = "#f0f1f4"; // gray(100) = エディタ背景
const FG = "#432922"; // brown(900) = 文字色

const L = lightnessCurve({ 100: BG, 900: FG });

// 明るい側は BG の寒色、中間で mid の暖色へ。それより暗い側は彩度を抑える。
export const gray = grayScale(L, { light: BG, mid: "#988c82" });

export const brown = scale(L, FG);
export const red = scale(L, "#d24545");
export const orange = scale(L, "#e97500");
export const yellow = scale(L, "#d29d00");
export const lime = scale(L, "#72a317");
export const green = scale(L, "#12a349");
export const teal = scale(L, "#099da0");
export const cyan = scale(L, "#0ab1d2");
export const blue = scale(L, "#1197f0");
export const violet = scale(L, "#6d5ad9");
export const purple = scale(L, "#ae6cbe");

/** 明度 → 段階番号（パレット調整用） */
export const stepOf = L.stepOf;
