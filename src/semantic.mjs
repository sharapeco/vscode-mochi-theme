// セマンティックカラー: 「役割 → ベースカラーのどの段階か」を決める。
// HEX は書かない。色を変えたいときは:
//   - 役割単位で変える → ここで段階や色相を差し替える
//   - 色相そのものを変える → hues.mjs の基準色を変える

import { gray, brown, teal, cyan, blue, violet, purple, red, orange, yellow, lime, green } from "./hues.mjs";

// 各色相の「標準のトーン」。シンタックス・ステータス・チャートなどで共有する。
const tone = {
  red: red(600),
  orange: orange(525),
  yellow: yellow(525),
  lime: lime(500),
  olive: lime(675),
  green: green(550),
  cyan: cyan(500),
  teal: teal(600),
  pine: teal(700),
  blue: blue(575),
  violet: violet(575),
  purple: purple(550),
};

const ui = {
  fg: brown(900), // 基本の文字色。UI の多くはこれに透明度をかけて使う
  fgMuted: gray(675), // 控えめな文字・ガイド線・ルーラーなど
  white: gray(0),
  accent: tone.teal, // 選択・アクティブ表示・バッジなど

  // 背景（明るい順）
  bgLightest: gray(25), // インラインチャット・ピークタイトル等
  bgPeekEditor: gray(50),
  bgWidgetAlt: gray(75), // クイック入力・スティッキースクロールのホバー
  bgPeekResult: gray(75),
  bgWidget: gray(85), // ホバー・サジェスト・ドロップダウン・入力欄等
  bg: gray(100), // エディタ背景
  bgPanel: gray(150), // パネル・ターミナル
  bgSideBar: gray(175), // サイドバー・アクティビティバー・タブ列
  bgUnchanged: gray(175), // diff の未変更領域
  bgSelectedItem: gray(175), // サジェストの選択行など
  bgSecondary: gray(200), // セカンダリボタン・パネルセクション見出し
  bgStickyScroll: gray(200),
  bgTitleBar: gray(275),
  bgDebugToolBar: teal(175),

  // 境界線・グレーの文字
  borderWidget: gray(250),
  border: gray(300), // メインの境界線
  borderInput: gray(350), // 入力欄・フォーカス
  lineNumber: gray(400),
  placeholder: gray(450),
  iconInactiveTop: gray(475),
  iconInactive: gray(500),
  lineNumberActive: gray(850),

  cursor: tone.yellow,
  highlight: tone.yellow, // リスト・サジェストの一致部分、リンク、プログレスバー
  linkedEditing: tone.blue,
  preformatBg: yellow(350),
  preformatFg: yellow(1000),
};

const status = {
  error: tone.red,
  errorHover: red(500),
  warning: tone.orange,
  warningHover: orange(450),
  caution: tone.yellow, // エディタの警告波線・入力検証の枠
  info: tone.blue,
  success: tone.green,
  offline: tone.purple,
  offlineHover: purple(450),
  remote: tone.pine,
  remoteHover: teal(575),
  itemHover: teal(275),
  debuggingBg: teal(225),
  debuggingFg: gray(1000),
};

const diff = {
  inserted: tone.green,
  removed: tone.red,
  modified: tone.blue,
  moved: tone.yellow,
  inlineEditPrimary: yellow(275),
  inlineEditSecondary: cyan(350),
  inlineEditSuccess: green(350),
};

const syntax = {
  plain: ui.fg,
  punctuation: ui.fg, // theme 側で透明度をかけて使う
  comment: ui.fgMuted,
  keyword: tone.yellow, // 制御構文・import/export・演算子
  storage: tone.pine, // const / function / class など
  string: tone.green,
  docstring: tone.olive,
  function: tone.blue, // 関数・タグ名
  type: tone.violet, // 型・クラス・enum
  typeName: tone.lime,
  variable: tone.cyan,
  property: tone.orange, // プロパティ・数値・this
  constant: tone.red,
  decorator: tone.purple, // デコレータ・パラメータ
};

const ansi = {
  black: ui.bg,
  red: tone.red,
  green: tone.green,
  yellow: tone.yellow,
  blue: tone.blue,
  magenta: tone.purple,
  cyan: tone.pine,
  white: ui.fg,
  brightBlack: gray(375),
  brightRed: red(500),
  brightGreen: green(450),
  brightYellow: yellow(450),
  brightBlue: blue(475),
  brightMagenta: purple(450),
  brightCyan: teal(625),
  brightWhite: gray(900),
};

const chart = {
  red: tone.red,
  orange: tone.orange,
  yellow: tone.yellow,
  green: tone.green,
  blue: tone.blue,
  purple: tone.purple,
};

// ブラケットペアの色（ネストの深さ順）
const bracket = { 1: tone.yellow, 2: tone.purple, 3: tone.blue, 4: tone.violet, 5: tone.pine, 6: tone.cyan };

const scmGraph = {
  1: tone.blue,
  2: tone.purple,
  3: tone.lime,
  4: tone.pine,
  5: tone.cyan,
  ref: tone.yellow,
  remoteRef: tone.blue,
  baseRef: tone.violet,
};

export default { tone, ui, status, diff, syntax, ansi, chart, bracket, scmGraph };
