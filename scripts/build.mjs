// src/palette.mjs + src/theme.mjs から themes/*.json を生成する。
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import palette from "../src/palette.mjs";
import buildTheme from "../src/theme.mjs";

const out = fileURLToPath(new URL("../themes/mochi-light-color-theme.json", import.meta.url));
const theme = {
  $schema: "vscode://schemas/color-theme",
  ...buildTheme(palette),
};
writeFileSync(out, JSON.stringify(theme, null, 2) + "\n");
console.log(`built ${out}`);
