/**
 * 色に透明度を付ける。
 * @param {string} hex "#rrggbb"
 * @param {number} a 0〜1
 * @returns {string} "#rrggbbaa"
 */
export function alpha(hex, a) {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) throw new Error(`alpha(): invalid color ${hex}`);
  if (a < 0 || a > 1) throw new Error(`alpha(): out of range ${a}`);
  return hex + Math.round(a * 255).toString(16).padStart(2, "0");
}
