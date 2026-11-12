# Mochi Light Theme

個人用の VSCode ライトテーマ。

## Credits

[Bearded Theme](https://github.com/BeardedBear/bearded-theme) の
「Bearded Theme feat. Melle Julie Light」をベースにしています（GPL-3.0）。

## ローカルインストール（非公開）

### 開発中: シンボリックリンク

```sh
ln -s "$(pwd)" ~/.vscode/extensions/local.mochi-theme-0.0.1
```

VSCode で `Developer: Reload Window` → `Preferences: Color Theme` から「Mochi Light」を選択。
`themes/mochi-light-color-theme.json` を編集したら Reload Window で反映されます。

### 安定版: .vsix

```sh
npx @vscode/vsce package
code --install-extension mochi-theme-0.0.1.vsix
```

※ シンボリックリンク版と同時に入れないこと（同名テーマが重複します）。
