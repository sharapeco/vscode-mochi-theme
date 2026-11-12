// Mochi Light のカラーパレット。
// ここの色を変えれば、参照しているすべての箇所に反映される。

export default {
  // ── Base ──
  fg: "#000000", // 基本の文字色。UI の多くはこれに透明度をかけて使う
  fgMuted: "#577172", // 控えめな文字・ガイド線・ルーラーなど
  white: "#ffffff",

  // ── Accent / Syntax ──
  primary: "#218d8f", // テーマのメインカラー（選択・アクティブ表示など）
  blue: "#1f89cf",
  red: "#d24545", // エラー・削除
  orange: "#c97a2a", // 警告・プロパティ
  yellow: "#b48806", // カーソル・警告アイコン
  green: "#2aa54d", // 追加・成功
  lime: "#81a622",
  olive: "#5d7421",
  turquoise: "#39a9b4", // 変数
  pine: "#23716d", // 標準ライブラリ変数・ターミナル cyan
  purple: "#ae6cbe", // パラメータ・デコレータ
  violet: "#7c68ef", // クラス・enum

  // ── UI backgrounds ──
  bg: "#edeeee", // エディタ背景
  bgSideBar: "#e4e5e5", // サイドバー・アクティビティバー・タブ列
  bgPanel: "#e8e9e9", // パネル・ターミナル
  bgTitleBar: "#cacccc",
  bgWidget: "#f2f3f3", // ホバー・サジェスト・ドロップダウン等
  bgWidgetAlt: "#f5f5f5", // クイック入力・スティッキースクロールのホバー
  bgPeekEditor: "#f7f8f8",
  bgPeekResult: "#f4f4f4",
  bgLightest: "#fafafa", // インラインチャット・ピークタイトル等
  bgSecondary: "#dbdddd", // セカンダリボタン・パネルセクション見出し
  bgStickyScroll: "#dfe0e0",
  bgUnchanged: "#e1e2e2", // diff の未変更領域
  bgSelectedItem: "#e0e2e2", // サジェストの選択行など
  bgDebugToolBar: "#dbe4e4",

  // ── UI borders / grays ──
  border: "#c6c9c9", // メインの境界線
  borderWidget: "#d3d5d5",
  borderInput: "#b9bcbc", // 入力欄・フォーカス
  lineNumber: "#a8b1b1",
  lineNumberActive: "#393d3d",
  placeholder: "#9ea4a4",
  activityInactive: "#8e9999",
  activityTopInactive: "#9fa0a0",

  // ── Status bar ──
  statusDebuggingBg: "#c9dada",
  statusDebuggingFg: "#0e1c1c",
  statusItemHover: "#b6d1d1",
  statusErrorHover: "#dc6e6e",
  statusWarningHover: "#da934c",
  statusOfflineHover: "#c18fce",
  statusRemoteHover: "#2f9893",

  // ── Terminal (bright) ──
  ansiBrightBlack: "#b4b7b7",
  ansiBrightRed: "#f52222",
  ansiBrightGreen: "#0bc440",
  ansiBrightYellow: "#ba8b00",
  ansiBrightBlue: "#008fee",
  ansiBrightMagenta: "#c14cde",
  ansiBrightCyan: "#0d8781",
  ansiBrightWhite: "#333333",

  // ── Diff / inline edit / misc ──
  diffInserted: "#1ab546",
  diffRemoved: "#e33434",
  linkedEditing: "#078ee7",
  inlineEditPrimary: "#f8c328",
  inlineEditSecondary: "#42d1d3",
  inlineEditSuccess: "#5fd681",
  preformatBg: "#d6ba83",
  preformatFg: "#201801",
};
