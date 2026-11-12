// src/semantic.mjs + src/theme.mjs から themes/*.json を生成する。
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import semantic from "../src/semantic.mjs";
import buildTheme from "../src/theme.mjs";

const out = fileURLToPath(new URL("../themes/mochi-light-color-theme.json", import.meta.url));
const theme = {
  $schema: "vscode://schemas/color-theme",
  ...buildTheme(semantic),
};

// 参照ミス（存在しない役割名 → undefined）を検出する
const problems = [];
(function check(node, path) {
  if (node === undefined) problems.push(path);
  else if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node)) check(v, `${path}.${k}`);
  }
})(theme, "theme");
if (problems.length) {
  console.error(`undefined color references:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}

writeFileSync(out, `${JSON.stringify(theme, null, 2)}\n`);
console.log(`built ${out}`);
