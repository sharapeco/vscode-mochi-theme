// セマンティックカラー: 「役割 → ベースカラーのどの段階か」を決める。
// HEX は書かない。色を変えたいときは:
//   - 役割単位で変える → ここで段階や色相を差し替える
//   - 色相そのものを変える → hues.mjs の基準色を変える
//
// ライトとダークは同じ定義を共有する。ダークの段階はライトの鏡像（100 = 背景、900 = 文字）なので
// UI の多くは同じ段階番号のままでよい。違う値が要るところだけ v(ライト, ダーク) で書き分ける。

import { alpha } from "./color.mjs";
import * as hues from "./hues.mjs";

/** @param {"light" | "dark"} variant */
function makeSemantic(variant) {
  const dark = variant === "dark";
  const v = (l, d) => (dark ? d : l);
  const { gray, brown, teal, cyan, blue, violet, purple, red, orange, yellow, lime, green } = hues[variant];

  // 各色相の「標準のトーン」。シンタックス・ステータス・チャートなどで共有する。
  // ダークでは背景側（小さい段階）が黒に向かって濁るので、全体に文字色側へ寄せる。
  const tone = {
    pink: red(v(450, 800)),
    red: red(v(600, 650)),
    orange: orange(v(550, 700)),
    yellow: yellow(v(500, 750)),
    lime: lime(v(500, 650)),
    olive: lime(v(650, 750)),
    green: green(v(550, 650)),
    darkGreen: green(v(750, 750)),
    cyan: cyan(v(500, 700)),
    teal: teal(v(600, 650)),
    pine: teal(v(750, 750)),
    blue: blue(v(600, 650)),
    indigo: blue(v(750, 750)),
    violet: violet(v(600, 700)),
    purple: purple(v(600, 700)),
  };

const ui = {
    fg: brown(900), // 基本の文字色。UI の多くはこれに透明度をかけて使う
    fgMuted: gray(675), // 控えめな文字・ガイド線・ルーラーなど
    white: gray(0),
    shadow: v(brown(900), gray(0)), // 影。ダークでは文字色（明るい）ではなく最暗のグレー
    accent: tone.teal, // 選択・アクティブ表示・バッジなど

    // 背景（背景側 → 文字側の順）
    // ポップアップ類はライトではエディタより明るく沈ませず、ダークでは少し持ち上げて浮かせる
    bgLightest: gray(v(25, 140)), // インラインチャット・ピークタイトル等
    bgPeekEditor: gray(v(50, 75)),
    bgWidgetAlt: gray(v(75, 135)), // クイック入力・スティッキースクロールのホバー
    bgPeekResult: gray(v(75, 125)),
    bgWidget: gray(v(85, 125)), // ホバー・サジェスト・ドロップダウン・入力欄等
    bg: gray(100), // エディタ背景
    bgPanel: gray(150), // パネル・ターミナル
    bgSideBar: gray(175), // サイドバー・アクティビティバー・タブ列
    bgUnchanged: gray(175), // diff の未変更領域
    bgSelectedItem: gray(175), // サジェストの選択行など
    bgSecondary: gray(200), // セカンダリボタン・パネルセクション見出し
    bgStickyScroll: gray(200),
    bgTitleBar: gray(275),
    bgDebugToolBar: teal(v(175, 225)),

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
    preformatBg: alpha(yellow(v(160, 225)), 0.5),
    preformatFg: yellow(v(900, 850)),
  };

  const status = {
    error: tone.red,
    // ステータスバー項目のホバー。ライトは明るく、ダークも明るく（= 文字色側へ）
    errorHover: red(v(500, 750)),
    warning: tone.orange,
    warningHover: orange(v(450, 800)),
    caution: tone.yellow, // エディタの警告波線・入力検証の枠
    info: tone.blue,
    success: tone.green,
    offline: tone.purple,
    offlineHover: purple(v(450, 800)),
    remote: tone.pine,
    remoteHover: teal(v(575, 850)),
    itemHover: teal(275),
    debuggingBg: teal(225),
    debuggingFg: gray(1000),
  };

  const diff = {
    inserted: tone.green,
    removed: tone.red,
    modified: tone.blue,
    moved: tone.yellow,
    inlineEditPrimary: yellow(v(275, 450)),
    inlineEditSecondary: cyan(v(350, 450)),
    inlineEditSuccess: green(v(350, 450)),
  };

  const syntax = {
    plain: ui.fg,
    punctuation: ui.fg, // theme 側で透明度をかけて使う
    comment: tone.teal, // コメント・ドキュメントコメント
    keyword: tone.darkGreen, // 制御構文・import/export・演算子
    storage: tone.red, // const / function / class など
    string: tone.green, // 文字列・正規表現
    docstring: tone.olive,
    function: tone.indigo, // 関数・タグ名
    type: tone.orange, // 型・クラス・enum
    typeName: tone.lime,
    variable: tone.olive, // 変数・プロパティ・引数
    property: tone.pine, // プロパティ・数値・this
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
    brightBlack: gray(v(375, 550)),
    brightRed: red(v(500, 750)),
    brightGreen: green(v(450, 750)),
    brightYellow: yellow(v(450, 850)),
    brightBlue: blue(v(475, 750)),
    brightMagenta: purple(v(450, 800)),
    brightCyan: teal(v(625, 850)),
    brightWhite: gray(v(900, 1000)),
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

  return { variant, tone, ui, status, diff, syntax, ansi, chart, bracket, scmGraph };
}

export const light = makeSemantic("light");
export const dark = makeSemantic("dark");
