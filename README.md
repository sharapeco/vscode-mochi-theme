# Mochi Light Theme

個人用の VSCode ライトテーマ。

## Credits

[Bearded Theme](https://github.com/BeardedBear/bearded-theme) の
「Bearded Theme feat. Melle Julie Light」をベースにしています（GPL-3.0）。

## 構成

| ファイル | 役割 |
| --- | --- |
| `src/palette.mjs` | カラーパレット。**色を変えるときはまずここ** |
| `src/theme.mjs` | どの UI 項目・トークンにどのパレット色を使うか |
| `src/color.mjs` | `alpha(color, 0〜1)` などの色ヘルパー |
| `scripts/build.mjs` | 上記から `themes/mochi-light-color-theme.json` を生成 |
| `themes/mochi-light-color-theme.json` | 生成物（直接編集しない） |

```sh
npm run build   # 1回ビルド
npm run watch   # src/ の変更を監視して自動ビルド
```

ビルド後、VSCode で `Developer: Reload Window` すると反映されます。

## ローカルインストール（非公開）

### 開発中: シンボリックリンク

```sh
ln -s "$(pwd)" ~/.vscode/extensions/local.mochi-theme-0.0.1
```

VSCode で `Developer: Reload Window` → `Preferences: Color Theme` から「Mochi Light」を選択。
### 安定版: .vsix

```sh
npm run package
code --install-extension mochi-theme-0.0.1.vsix
```

※ シンボリックリンク版と同時に入れないこと（同名テーマが重複します）。
