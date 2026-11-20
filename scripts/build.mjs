// src/semantic.mjs + src/theme.mjs から themes/*.json を生成する（ライト・ダーク）。
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import * as semantic from "../src/semantic.mjs";
import buildTheme from "../src/theme.mjs";

const variants = ["light", "dark"];

let failed = false;
for (const key of variants) {
  const out = fileURLToPath(new URL(`../themes/mochi-${key}-color-theme.json`, import.meta.url));
  const theme = {
    $schema: "vscode://schemas/color-theme",
    ...buildTheme(semantic[key]),
  };

  // 参照ミス（存在しない役割名 → undefined）を検出する
  const problems = [];
  (function check(node, path) {
    if (node === undefined) problems.push(path);
    else if (node && typeof node === "object") {
      for (const [k, v] of Object.entries(node)) check(v, `${path}.${k}`);
    }
  })(theme, key);
  if (problems.length) {
    console.error(`undefined color references:\n  ${problems.join("\n  ")}`);
    failed = true;
    continue;
  }

  writeFileSync(out, `${JSON.stringify(theme, null, 2)}\n`);
  console.log(`built ${out}`);
}
if (failed) process.exit(1);
