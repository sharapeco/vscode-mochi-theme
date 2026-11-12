# Mochi Light Theme

個人用の VSCode ライトテーマ。

## Credits

[Bearded Theme](https://github.com/BeardedBear/bearded-theme) の
「Bearded Theme feat. Melle Julie Light」をベースにしています（GPL-3.0）。

## 構成

| ファイル | 役割 |
| --- | --- |
| `src/hues.mjs` | ベースカラー。色相ごとの基準色から段階スケール（`gray(100)`, `teal(600)` …）を生成。**HEX はここだけ** |
| `src/semantic.mjs` | 役割 → ベースカラーの段階（`ui.bg = gray(100)`, `syntax.string = tone.green` …） |
| `src/theme.mjs` | VSCode の各キー・トークンにどの役割を使うか（semantic のみ参照） |
| `src/color.mjs` | OKLCH 変換・明度カーブ・スケール生成・`alpha()` |
| `scripts/build.mjs` | 上記から `themes/mochi-light-color-theme.json` を生成 |
| `scripts/preview.mjs` | 色見本ページ `preview/palette.html` を生成（gitignore 済み） |
| `themes/mochi-light-color-theme.json` | 生成物（直接編集しない） |

### 色の仕組み

- 段階は 0（白）〜 1000（暗）。**同じ段階番号ならどの色相でも OKLCH 明度が同じ**。
- 明度カーブは `gray(100)` = 背景 `#f0f1f4`、`brown(900)` = 文字 `#432922` の2点で決まる（この2色は常にそのまま出力）。
- gray は明るい側が背景の寒色、中間で `#988c82` の暖色へ移り、暗い側は彩度を抑える。
- 有彩色は基準色の色相・彩度を保ち、明るい段階ほど白へ、暗い段階ほど彩度を抑える。
- VSCode のテーマは sRGB（HEX）しか扱えないため、範囲外になる段階は明度・色相を保って彩度を下げる。

## コマンド（pnpm / [ni](https://github.com/antfu-collective/ni)）

```sh
nr build    # 1回ビルド
nr watch    # src/ の変更を監視して自動ビルド
nr preview  # 色見本ページ preview/palette.html を生成
```

ビルド後、VSCode で `Developer: Reload Window` すると反映されます。

## ローカルインストール（非公開）

### 開発中: シンボリックリンク

```sh
ln -s "$(pwd)" ~/.vscode/extensions/local.mochi-theme-0.0.1
```

VSCode で `Developer: Reload Window` → `Preferences: Color Theme` から「Mochi Light」を選択。
以降は `nr build`（または `nr watch`）→ Reload Window で反映されます。

### 安定版: .vsix

```sh
nr package
code --install-extension mochi-theme-0.0.1.vsix
```

※ シンボリックリンク版と同時に入れないこと（同名テーマが重複します）。
