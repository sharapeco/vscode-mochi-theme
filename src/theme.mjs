// テーマ本体。色はすべて palette.mjs の名前で参照する。
// alpha(color, 0〜1) で透明度を付けられる。
// 編集後は `npm run build` で themes/*.json を再生成すること。

import { alpha } from "./color.mjs";

/** @param {Record<string, string>} p palette */
export default (p) => ({
  colors: {
    contrastActiveBorder: alpha(p.fg, 0),
    contrastBorder: alpha(p.fg, 0),
    descriptionForeground: alpha(p.fg, 0.8),
    disabledForeground: alpha(p.fg, 0.3),
    errorForeground: p.red,
    focusBorder: p.borderInput,
    foreground: p.fg,
    "icon.foreground": alpha(p.fg, 0.67),
    "selection.background": alpha(p.primary, 0.38),
    "activityBar.activeBackground": alpha(p.primary, 0.15),
    "activityBar.activeBorder": p.primary,
    "activityBar.background": p.bgSideBar,
    "activityBar.border": p.border,
    "activityBar.dropBorder": alpha(p.fgMuted, 0.2),
    "activityBar.foreground": p.primary,
    "activityBar.inactiveForeground": p.activityInactive,
    "activityBarBadge.background": p.primary,
    "activityBarBadge.foreground": p.bgSideBar,
    "activityBarTop.activeBorder": p.primary,
    "activityBarTop.dropBorder": alpha(p.fgMuted, 0.2),
    "activityBarTop.foreground": p.primary,
    "activityBarTop.inactiveForeground": p.activityTopInactive,
    "badge.background": p.primary,
    "badge.foreground": p.bgSideBar,
    "breadcrumb.background": p.bg,
    "breadcrumbPicker.background": p.bgLightest,
    "button.background": alpha(p.primary, 0.5),
    "button.border": alpha(p.fg, 0.15),
    "button.foreground": p.fg,
    "button.hoverBackground": alpha(p.primary, 0.6),
    "button.secondaryBackground": p.bgSecondary,
    "button.secondaryForeground": p.fg,
    "button.secondaryHoverBackground": p.borderWidget,
    "button.separator": alpha(p.fg, 0.3),
    "charts.blue": p.blue,
    "charts.foreground": p.fg,
    "charts.green": p.green,
    "charts.lines": p.fg,
    "charts.orange": p.orange,
    "charts.purple": p.purple,
    "charts.red": p.red,
    "charts.yellow": p.yellow,
    "checkbox.foreground": p.fg,
    "commandCenter.activeBackground": alpha(p.bgWidget, 0.38),
    "commandCenter.activeForeground": alpha(p.fg, 0.56),
    "commandCenter.background": p.bg,
    "commandCenter.border": p.border,
    "commandCenter.foreground": p.fgMuted,
    "debugConsole.errorForeground": p.red,
    "debugConsole.infoForeground": p.blue,
    "debugConsole.warningForeground": p.orange,
    "debugExceptionWidget.background": p.bgWidget,
    "debugExceptionWidget.border": p.border,
    "debugIcon.breakpointCurrentStackframeForeground": p.red,
    "debugIcon.breakpointDisabledForeground": alpha(p.red, 0.5),
    "debugIcon.breakpointForeground": p.red,
    "debugIcon.continueForeground": p.blue,
    "debugIcon.disconnectForeground": p.red,
    "debugIcon.pauseForeground": p.red,
    "debugIcon.restartForeground": p.green,
    "debugIcon.startForeground": p.green,
    "debugIcon.stepBackForeground": p.blue,
    "debugIcon.stepIntoForeground": p.blue,
    "debugIcon.stepOutForeground": p.blue,
    "debugIcon.stepOverForeground": p.blue,
    "debugIcon.stopForeground": p.red,
    "debugToolBar.background": p.bgDebugToolBar,
    "diffEditor.border": p.border,
    "diffEditor.diagonalFill": p.bgLightest,
    "diffEditor.insertedLineBackground": alpha(p.diffInserted, 0.1),
    "diffEditor.insertedTextBackground": alpha(p.diffInserted, 0.1),
    "diffEditor.insertedTextBorder": alpha(p.fg, 0),
    "diffEditor.move.border": alpha(p.yellow, 0.3),
    "diffEditor.moveActive.border": alpha(p.yellow, 0.7),
    "diffEditor.removedLineBackground": alpha(p.diffRemoved, 0.1),
    "diffEditor.removedTextBackground": alpha(p.diffRemoved, 0.1),
    "diffEditor.removedTextBorder": alpha(p.fg, 0),
    "diffEditor.unchangedCodeBackground": p.bgUnchanged,
    "diffEditor.unchangedRegionBackground": p.bgUnchanged,
    "diffEditor.unchangedRegionShadow": alpha(p.fg, 0.2),
    "diffEditorGutter.insertedLineBackground": alpha(p.fg, 0),
    "diffEditorGutter.removedLineBackground": alpha(p.fg, 0),
    "diffEditorOverview.insertedForeground": alpha(p.green, 0.15),
    "diffEditorOverview.removedForeground": alpha(p.red, 0.19),
    "dropdown.background": p.bgWidget,
    "dropdown.border": p.borderInput,
    "dropdown.foreground": p.fg,
    "dropdown.listBackground": p.bgWidget,
    "editor.background": p.bg,
    "editor.findMatchBackground": alpha(p.primary, 0.19),
    "editor.findMatchBorder": alpha(p.primary, 0.38),
    "editor.findMatchHighlightBackground": alpha(p.primary, 0.24),
    "editor.findMatchHighlightBorder": alpha(p.primary, 0.36),
    "editor.foldBackground": alpha(p.fg, 0.05),
    "editor.foldPlaceholderForeground": p.fgMuted,
    "editor.foreground": p.fg,
    "editor.hoverHighlightBackground": alpha(p.primary, 0.3),
    "editor.inactiveSelectionBackground": alpha(p.primary, 0.3),
    "editor.lineHighlightBackground": alpha(p.primary, 0.06),
    "editor.lineHighlightBorder": alpha(p.primary, 0.15),
    "editor.linkedEditingBackground": alpha(p.linkedEditing, 0.2),
    "editor.rangeHighlightBackground": alpha(p.primary, 0.24),
    "editor.selectionBackground": alpha(p.primary, 0.3),
    "editor.selectionForeground": p.fg,
    "editor.selectionHighlightBackground": alpha(p.primary, 0.08),
    "editor.selectionHighlightBorder": alpha(p.primary, 0.3),
    "editor.wordHighlightBackground": alpha(p.primary, 0.12),
    "editor.wordHighlightBorder": alpha(p.primary, 0.24),
    "editor.wordHighlightStrongBackground": alpha(p.primary, 0.24),
    "editorBracketHighlight.foreground1": p.yellow,
    "editorBracketHighlight.foreground2": p.purple,
    "editorBracketHighlight.foreground3": p.blue,
    "editorBracketHighlight.foreground4": p.violet,
    "editorBracketHighlight.foreground5": p.pine,
    "editorBracketHighlight.foreground6": p.turquoise,
    "editorBracketHighlight.unexpectedBracket.foreground": p.red,
    "editorBracketMatch.background": alpha(p.primary, 0.3),
    "editorBracketMatch.border": alpha(p.primary, 0.45),
    "editorCodeLens.foreground": alpha(p.fg, 0.5),
    "editorCursor.background": p.primary,
    "editorCursor.foreground": p.yellow,
    "editorError.border": alpha(p.fg, 0),
    "editorError.foreground": p.red,
    "editorGhostText.border": alpha(p.fg, 0),
    "editorGhostText.foreground": alpha(p.fg, 0.44),
    "editorGroup.border": p.border,
    "editorGroup.dropBackground": alpha(p.primary, 0.08),
    "editorGroupHeader.border": alpha(p.fg, 0),
    "editorGroupHeader.noTabsBackground": p.bg,
    "editorGroupHeader.tabsBackground": p.bgSideBar,
    "editorGroupHeader.tabsBorder": p.border,
    "editorGutter.addedBackground": alpha(p.green, 0.8),
    "editorGutter.background": p.bg,
    "editorGutter.commentRangeForeground": p.bgWidget,
    "editorGutter.deletedBackground": alpha(p.red, 0.8),
    "editorGutter.modifiedBackground": alpha(p.blue, 0.8),
    "editorHoverWidget.background": p.bgWidget,
    "editorHoverWidget.border": p.border,
    "editorIndentGuide.activeBackground1": alpha(p.fgMuted, 0.8),
    "editorIndentGuide.background1": alpha(p.fgMuted, 0.2),
    "editorInfo.border": alpha(p.fg, 0),
    "editorInlayHint.background": alpha(p.fg, 0.1),
    "editorInlayHint.foreground": alpha(p.fg, 0.7),
    "editorInlayHint.parameterBackground": alpha(p.fg, 0.1),
    "editorInlayHint.parameterForeground": alpha(p.fg, 0.7),
    "editorInlayHint.typeBackground": alpha(p.fg, 0.1),
    "editorInlayHint.typeForeground": alpha(p.fg, 0.7),
    "editorLineNumber.activeForeground": p.lineNumberActive,
    "editorLineNumber.foreground": p.lineNumber,
    "editorLink.activeForeground": p.fg,
    "editorMarkerNavigation.background": p.bgSideBar,
    "editorMarkerNavigationError.background": alpha(p.red, 0.56),
    "editorMarkerNavigationInfo.background": alpha(p.blue, 0.56),
    "editorMarkerNavigationWarning.background": alpha(p.orange, 0.56),
    "editorOverviewRuler.addedForeground": alpha(p.green, 0.5),
    "editorOverviewRuler.border": p.border,
    "editorOverviewRuler.deletedForeground": alpha(p.red, 0.5),
    "editorOverviewRuler.errorForeground": p.red,
    "editorOverviewRuler.incomingContentForeground": alpha(p.green, 0.5),
    "editorOverviewRuler.infoForeground": alpha(p.blue, 0.5),
    "editorOverviewRuler.modifiedForeground": alpha(p.blue, 0.5),
    "editorOverviewRuler.selectionHighlightForeground": alpha(p.primary, 0.5),
    "editorOverviewRuler.warningForeground": p.orange,
    "editorRuler.foreground": alpha(p.fgMuted, 0.2),
    "editorStickyScroll.shadow": alpha(p.fg, 0.2),
    "editorStickyScrollHover.background": p.bgWidgetAlt,
    "editorSuggestWidget.background": p.bgWidget,
    "editorSuggestWidget.border": p.border,
    "editorSuggestWidget.foreground": p.fg,
    "editorSuggestWidget.highlightForeground": p.yellow,
    "editorSuggestWidget.selectedBackground": p.bgSelectedItem,
    "editorSuggestWidget.selectedIconForeground": p.fg,
    "editorUnnecessaryCode.border": alpha(p.fg, 0),
    "editorUnnecessaryCode.opacity": alpha(p.fg, 0.67),
    "editorWarning.border": alpha(p.fg, 0),
    "editorWarning.foreground": p.yellow,
    "editorWhitespace.foreground": alpha(p.fgMuted, 0.38),
    "editorWidget.background": p.bgWidget,
    "editorWidget.border": p.borderWidget,
    "editorWidget.resizeBorder": alpha(p.primary, 0.31),
    "errorLens.errorForeground": alpha(p.red, 0.99),
    "errorLens.hintForeground": alpha(p.blue, 0.99),
    "errorLens.infoForeground": alpha(p.blue, 0.99),
    "errorLens.warningForeground": alpha(p.orange, 0.99),
    "extensionButton.background": alpha(p.primary, 0.5),
    "extensionButton.foreground": p.fg,
    "extensionButton.hoverBackground": alpha(p.primary, 0.6),
    "extensionButton.prominentBackground": alpha(p.primary, 0.62),
    "extensionButton.prominentForeground": p.fg,
    "extensionButton.prominentHoverBackground": p.primary,
    "gitDecoration.conflictingResourceForeground": p.primary,
    "gitDecoration.deletedResourceForeground": p.red,
    "gitDecoration.ignoredResourceForeground": p.fgMuted,
    "gitDecoration.modifiedResourceForeground": p.blue,
    "gitDecoration.untrackedResourceForeground": p.green,
    "multiDiffEditor.border": p.border,
    "multiDiffEditor.headerBackground": p.bgSelectedItem,
    "scmGraph.foreground1": p.blue,
    "scmGraph.foreground2": p.purple,
    "scmGraph.foreground3": p.lime,
    "scmGraph.foreground4": p.pine,
    "scmGraph.foreground5": p.turquoise,
    "scmGraph.historyItemBaseRefColor": p.violet,
    "scmGraph.historyItemHoverAdditionsForeground": p.green,
    "scmGraph.historyItemHoverDefaultLabelBackground": p.fg,
    "scmGraph.historyItemHoverDefaultLabelForeground": p.fg,
    "scmGraph.historyItemHoverDeletionsForeground": p.red,
    "scmGraph.historyItemHoverLabelForeground": p.fg,
    "scmGraph.historyItemRefColor": p.yellow,
    "scmGraph.historyItemRemoteRefColor": p.blue,
    "inlineChat.background": p.bgLightest,
    "inlineChat.border": p.borderWidget,
    "inlineChatInput.background": p.bgWidget,
    "inlineChatInput.border": p.borderWidget,
    "inlineChatInput.focusBorder": p.borderInput,
    "inlineEdit.gutterIndicator.background": alpha(p.fg, 0.5),
    "inlineEdit.gutterIndicator.primaryBackground": alpha(p.inlineEditPrimary, 0.7),
    "inlineEdit.gutterIndicator.primaryBorder": alpha(p.inlineEditPrimary, 0),
    "inlineEdit.gutterIndicator.primaryForeground": p.fg,
    "inlineEdit.gutterIndicator.secondaryBackground": alpha(p.inlineEditSecondary, 0.7),
    "inlineEdit.gutterIndicator.secondaryBorder": alpha(p.inlineEditSecondary, 0),
    "inlineEdit.gutterIndicator.secondaryForeground": p.fg,
    "inlineEdit.gutterIndicator.successfulBackground": alpha(p.inlineEditSuccess, 0.7),
    "inlineEdit.gutterIndicator.successfulBorder": alpha(p.inlineEditSuccess, 0),
    "inlineEdit.gutterIndicator.successfulForeground": p.fg,
    "inlineEdit.modifiedBackground": alpha(p.green, 0.15),
    "inlineEdit.modifiedBorder": alpha(p.green, 0.8),
    "inlineEdit.modifiedChangedLineBackground": alpha(p.green, 0.08),
    "inlineEdit.modifiedChangedTextBackground": alpha(p.fg, 0),
    "inlineEdit.originalBackground": alpha(p.red, 0.15),
    "inlineEdit.originalBorder": alpha(p.red, 0.8),
    "inlineEdit.originalChangedLineBackground": alpha(p.red, 0.8),
    "inlineEdit.originalChangedTextBackground": alpha(p.fg, 0),
    "inlineEdit.tabWillAcceptModifiedBorder": p.green,
    "inlineEdit.tabWillAcceptOriginalBorder": p.red,
    "input.background": p.bgWidget,
    "input.border": p.borderInput,
    "input.foreground": p.fg,
    "input.placeholderForeground": p.placeholder,
    "inputOption.activeBackground": p.placeholder,
    "inputOption.activeBorder": alpha(p.fg, 0),
    "inputOption.activeForeground": p.fg,
    "inputOption.hoverBackground": p.borderWidget,
    "inputValidation.errorBackground": p.bgWidget,
    "inputValidation.errorBorder": p.yellow,
    "inputValidation.infoBackground": p.bgWidget,
    "inputValidation.infoBorder": p.primary,
    "inputValidation.warningBackground": p.bgWidget,
    "inputValidation.warningBorder": p.yellow,
    "keybindingLabel.background": p.bgWidget,
    "keybindingLabel.border": p.fgMuted,
    "keybindingLabel.bottomBorder": p.fgMuted,
    "keybindingLabel.foreground": p.fg,
    "list.activeSelectionBackground": alpha(p.fgMuted, 0.2),
    "list.activeSelectionForeground": p.fg,
    "list.dropBackground": alpha(p.primary, 0.08),
    "list.errorForeground": p.red,
    "list.focusBackground": alpha(p.primary, 0.25),
    "list.focusForeground": p.fg,
    "list.highlightForeground": p.yellow,
    "list.hoverBackground": alpha(p.fgMuted, 0.1),
    "list.hoverForeground": p.fg,
    "list.inactiveSelectionBackground": alpha(p.fgMuted, 0.12),
    "list.inactiveSelectionForeground": p.fg,
    "list.warningForeground": p.orange,
    "menu.background": p.bgWidget,
    "menu.border": p.border,
    "menu.foreground": p.fg,
    "menu.selectionForeground": p.fg,
    "menu.separatorBackground": alpha(p.border, 0.4),
    "menubar.selectionBackground": p.bgWidget,
    "menubar.selectionForeground": p.fg,
    "merge.border": p.border,
    "merge.commonContentBackground": alpha(p.yellow, 0.19),
    "merge.commonHeaderBackground": alpha(p.yellow, 0.5),
    "merge.currentContentBackground": alpha(p.green, 0.19),
    "merge.currentHeaderBackground": alpha(p.green, 0.5),
    "merge.incomingContentBackground": alpha(p.blue, 0.19),
    "merge.incomingHeaderBackground": alpha(p.blue, 0.5),
    "minimap.background": p.bg,
    "minimap.errorHighlight": p.red,
    "minimap.findMatchHighlight": p.primary,
    "minimap.selectionHighlight": p.primary,
    "minimap.selectionOccurrenceHighlight": p.primary,
    "minimap.warningHighlight": p.orange,
    "minimapGutter.addedBackground": p.green,
    "minimapGutter.deletedBackground": p.red,
    "minimapGutter.modifiedBackground": p.blue,
    "notificationCenterHeader.background": p.bgWidget,
    "notificationCenterHeader.foreground": p.fg,
    "notificationLink.foreground": p.yellow,
    "notifications.background": p.bgWidget,
    "notifications.border": p.border,
    "notifications.foreground": p.fg,
    "notificationsErrorIcon.foreground": p.red,
    "notificationsInfoIcon.foreground": p.blue,
    "notificationsWarningIcon.foreground": p.orange,
    "panel.background": p.bgPanel,
    "panel.border": p.border,
    "panel.dropBorder": alpha(p.fgMuted, 0.5),
    "panelInput.border": p.borderWidget,
    "panelSection.border": p.border,
    "panelSectionHeader.background": p.bgSecondary,
    "panelSectionHeader.border": p.border,
    "panelSectionHeader.foreground": p.fg,
    "panelTitle.activeBorder": p.primary,
    "panelTitle.activeForeground": p.primary,
    "panelTitle.inactiveForeground": p.fgMuted,
    "peekView.border": p.border,
    "peekViewEditor.background": p.bgPeekEditor,
    "peekViewEditor.matchHighlightBackground": alpha(p.bgWidget, 0.25),
    "peekViewEditor.matchHighlightBorder": alpha(p.fg, 0),
    "peekViewEditorGutter.background": p.bgPeekEditor,
    "peekViewEditorStickyScroll.background": p.bgWidgetAlt,
    "peekViewResult.background": p.bgPeekResult,
    "peekViewResult.fileForeground": p.fg,
    "peekViewResult.lineForeground": p.fg,
    "peekViewResult.matchHighlightBackground": alpha(p.primary, 0.5),
    "peekViewResult.selectionBackground": alpha(p.primary, 0.2),
    "peekViewResult.selectionForeground": p.fg,
    "peekViewTitle.background": p.bgLightest,
    "peekViewTitleDescription.foreground": p.fg,
    "peekViewTitleLabel.foreground": p.fg,
    "pickerGroup.border": p.border,
    "pickerGroup.foreground": p.fg,
    "profileBadge.background": p.primary,
    "profileBadge.foreground": p.bg,
    "progressBar.background": p.yellow,
    "quickInput.background": p.bgWidgetAlt,
    "quickInput.foreground": p.fg,
    "quickInputList.focusBackground": alpha(p.fgMuted, 0.2),
    "quickInputList.focusForeground": p.fg,
    "quickInputList.focusIconForeground": p.fg,
    "quickInputTitle.background": p.bgSideBar,
    "sash.hoverBorder": alpha(p.primary, 0.31),
    "scrollbar.shadow": alpha(p.fg, 0.2),
    "scrollbarSlider.activeBackground": alpha(p.fg, 0.3),
    "scrollbarSlider.background": alpha(p.fg, 0.15),
    "scrollbarSlider.hoverBackground": alpha(p.fg, 0.2),
    "settings.headerForeground": p.fg,
    "settings.modifiedItemIndicator": p.primary,
    "settings.settingsHeaderHoverForeground": p.fg,
    "sideBar.background": p.bgSideBar,
    "sideBar.border": p.border,
    "sideBar.foreground": alpha(p.fg, 0.8),
    "sideBarSectionHeader.background": p.bgSideBar,
    "sideBarSectionHeader.border": p.border,
    "sideBarSectionHeader.foreground": p.fg,
    "sideBarStickyScroll.background": p.bgStickyScroll,
    "sideBarStickyScroll.shadow": alpha(p.fg, 0.2),
    "sideBarTitle.foreground": p.fgMuted,
    "statusBar.background": p.bg,
    "statusBar.border": p.border,
    "statusBar.debuggingBackground": p.statusDebuggingBg,
    "statusBar.debuggingForeground": p.statusDebuggingFg,
    "statusBar.foreground": alpha(p.fg, 0.5),
    "statusBar.noFolderBackground": p.bgSideBar,
    "statusBar.noFolderBorder": p.border,
    "statusBar.noFolderForeground": alpha(p.fg, 0.8),
    "statusBarItem.activeBackground": p.bgWidget,
    "statusBarItem.compactHoverBackground": alpha(p.primary, 0.8),
    "statusBarItem.hoverBackground": p.statusItemHover,
    "statusBarItem.hoverForeground": p.fg,
    "statusBarItem.prominentBackground": p.bg,
    "statusBarItem.prominentForeground": p.bg,
    "statusBarItem.prominentHoverBackground": p.white,
    "statusBarItem.prominentHoverForeground": p.bg,
    "statusBarItem.errorBackground": p.red,
    "statusBarItem.errorForeground": p.bg,
    "statusBarItem.errorHoverBackground": p.statusErrorHover,
    "statusBarItem.errorHoverForeground": p.bg,
    "statusBarItem.offlineBackground": p.purple,
    "statusBarItem.offlineForeground": p.bg,
    "statusBarItem.offlineHoverBackground": p.statusOfflineHover,
    "statusBarItem.offlineHoverForeground": p.bg,
    "statusBarItem.remoteBackground": p.pine,
    "statusBarItem.remoteForeground": p.bg,
    "statusBarItem.remoteHoverBackground": p.statusRemoteHover,
    "statusBarItem.remoteHoverForeground": p.bg,
    "statusBarItem.warningBackground": p.orange,
    "statusBarItem.warningForeground": p.bg,
    "statusBarItem.warningHoverBackground": p.statusWarningHover,
    "statusBarItem.warningHoverForeground": p.bg,
    "tab.activeBackground": p.bg,
    "tab.activeBorder": p.bg,
    "tab.activeBorderTop": p.primary,
    "tab.activeForeground": p.fg,
    "tab.border": p.border,
    "tab.hoverBackground": p.bg,
    "tab.inactiveBackground": p.bgSideBar,
    "tab.inactiveForeground": p.fgMuted,
    "tab.lastPinnedBorder": p.border,
    "tab.unfocusedActiveBorder": p.bg,
    "tab.unfocusedActiveForeground": p.primary,
    "tab.unfocusedHoverBackground": p.bg,
    "tab.unfocusedInactiveForeground": p.fgMuted,
    "terminal.ansiBlack": p.bg,
    "terminal.ansiBlue": p.blue,
    "terminal.ansiBrightBlack": p.ansiBrightBlack,
    "terminal.ansiBrightBlue": p.ansiBrightBlue,
    "terminal.ansiBrightCyan": p.ansiBrightCyan,
    "terminal.ansiBrightGreen": p.ansiBrightGreen,
    "terminal.ansiBrightMagenta": p.ansiBrightMagenta,
    "terminal.ansiBrightRed": p.ansiBrightRed,
    "terminal.ansiBrightWhite": p.ansiBrightWhite,
    "terminal.ansiBrightYellow": p.ansiBrightYellow,
    "terminal.ansiCyan": p.pine,
    "terminal.ansiGreen": p.green,
    "terminal.ansiMagenta": p.purple,
    "terminal.ansiRed": p.red,
    "terminal.ansiWhite": p.fg,
    "terminal.ansiYellow": p.yellow,
    "terminal.background": p.bgPanel,
    "terminal.foreground": p.fg,
    "terminal.selectionForeground": p.fg,
    "terminalCursor.background": p.bg,
    "terminalCursor.foreground": p.yellow,
    "terminalStickyScrollHover.background": p.bgWidgetAlt,
    "textBlockQuote.background": alpha(p.blue, 0.2),
    "textBlockQuote.border": alpha(p.blue, 0.73),
    "textCodeBlock.background": alpha(p.blue, 0.2),
    "textLink.activeForeground": p.primary,
    "textLink.foreground": p.primary,
    "textPreformat.background": p.preformatBg,
    "textPreformat.foreground": p.preformatFg,
    "textSeparator.foreground": p.primary,
    "titleBar.activeBackground": p.bgTitleBar,
    "titleBar.activeForeground": alpha(p.fg, 0.6),
    "titleBar.border": p.border,
    "titleBar.inactiveBackground": p.bgTitleBar,
    "titleBar.inactiveForeground": alpha(p.fg, 0.6),
    "toolbar.activeBackground": alpha(p.fgMuted, 0.5),
    "toolbar.hoverBackground": alpha(p.fgMuted, 0.3),
    "tree.indentGuidesStroke": alpha(p.fgMuted, 0.44),
    "walkThrough.embeddedEditorBackground": p.bg,
    "welcomePage.progress.background": p.bgWidget,
    "welcomePage.progress.foreground": p.primary,
    "welcomePage.tileBackground": alpha(p.fg, 0.1),
    "welcomePage.tileBorder": alpha(p.fg, 0.2),
    "welcomePage.tileHoverBackground": alpha(p.fg, 0.2),
    "widget.shadow": alpha(p.fg, 0.05)
  },
  name: "Mochi Light",
  semanticHighlighting: true,
  semanticTokenColors: {
    "class.declaration": {
      foreground: p.violet
    },
    "class.decorator": {
      foreground: p.purple
    },
    enumMember: {
      foreground: p.violet
    },
    "meta.decorator": {
      foreground: p.purple
    },
    namespace: {
      foreground: p.blue
    },
    parameter: {
      foreground: p.purple
    },
    property: {
      foreground: p.orange
    },
    "property.declaration": {
      foreground: p.fg
    },
    variable: {
      foreground: p.turquoise
    },
    "variable.defaultLibrary": {
      foreground: p.pine
    }
  },
  tokenColors: [
    {
      scope: [
        "support.module.elm",
        "entity.other.inherited-class.python",
        "variable.other.object",
        "support.other.namespace.php",
        "entity.other.attribute-name.namespace.xml",
        "record.accessor",
        "entity.name.record.field.accessor",
        "storage.modifier.import.java",
        "storage.modifier.import.groovy",
        "meta.import.swift entity.name.type.swift",
        "meta.member.access.python",
        "variable.other.property.ts",
        "variable.other.property.js",
        "constant.language.symbol.elixir",
        "punctuation.tag.liquid support.class.liquid",
        "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell punctuation.definition.variable.powershell",
        "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell",
        "source.cpp meta.block.class.cpp meta.body.class.cpp",
        "source.cpp meta.block.class.cpp meta.body.class.cpp meta.function.definition.special.constructor.cpp meta.body.function.definition.special.constructor.cpp"
      ],
      settings: {
        foreground: p.orange
      }
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: p.lime
      }
    },
    {
      scope: [
        "comment",
        "punctuation.definition.comment",
        "string.quoted.docstring.multi",
        "comment.block.documentation source"
      ],
      settings: {
        fontStyle: "italic",
        foreground: alpha(p.fgMuted, 0.7)
      }
    },
    {
      scope: [
        "constant",
        "support.constant.core.php"
      ],
      settings: {
        foreground: p.red
      }
    },
    {
      scope: [
        "meta.section.struct.go variable.other.field.go",
        "meta.section.struct.go variable.other.declaration.go",
        "source",
        "support",
        "constant.character.entity.named",
        "meta.jsx.children",
        "source.lua",
        "text.html.derivative",
        "source.graphql meta.selections variable.other.alias.graphql",
        "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
        "source.graphql variable.arguments.graphql",
        "JSXNested"
      ],
      settings: {
        foreground: p.fg
      }
    },
    {
      scope: [
        "entity.name.function.decorator",
        "meta.decorator entity.name.function",
        "meta.decorator punctuation.decorator",
        "punctuation.definition.decorator",
        "meta.decorator variable.other.readwrite.ts",
        "variable.parameter.gdscript",
        "entity.name.variable.parameter",
        "variable.parameter"
      ],
      settings: {
        foreground: p.purple
      }
    },
    {
      scope: [
        "keyword.control.export",
        "support.type.object.module"
      ],
      settings: {
        foreground: p.yellow
      }
    },
    {
      scope: [
        "support.function",
        "entity.name.function",
        "meta.function-call",
        "meta.function",
        "meta.method.declaration",
        "meta.function-call support",
        "variable.language.super.ts",
        "source.directive",
        "meta.function-call.generic",
        "meta.method-call.static.php",
        "meta.method-call.php",
        "meta.class storage.type",
        "meta.method.groovy",
        "meta.bracket.square.access",
        "entity.name.function-call.elixir",
        "punctuation.output.liquid support.variable.liquid",
        "meta.function.echo.edge source.js keyword.operator.error-control.js",
        "entity.name.type.variant.gdscript",
        "entity.name.function.powershell"
      ],
      settings: {
        foreground: p.blue
      }
    },
    {
      scope: [
        "keyword.control.import",
        "meta.module.name.elm support",
        "meta.import.elm support",
        "keyword.control.at-rule",
        "punctuation.definition.keyword",
        "variable.control.import.include",
        "keyword.other.import.java"
      ],
      settings: {
        foreground: p.yellow
      }
    },
    {
      scope: [
        "keyword.package.go",
        "keyword.operator.pointer.go",
        "keyword.control",
        "keyword.control.conditional",
        "storage.modifier",
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.begin.blade",
        "keyword.end.blade",
        "keyword.blade",
        "keyword.type-alias",
        "keyword.type",
        "support.class.console",
        "keyword.other.await",
        "storage.type.class.jsdoc",
        "punctuation.definition.block.tag.jsdoc",
        "keyword.other.new",
        "keyword.other.phpdoc",
        "keyword.other.use.php",
        "keyword.operator.logical.python",
        "keyword.other.import.static.groovy",
        "keyword.other.import.groovy",
        "punctuation.definition.attribute.swift",
        "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
        "meta.directive.on.svelte entity.name.type.svelte",
        "keyword.other.special-method.elixir",
        "keyword.edge",
        "entity.name.function.edge",
        "support.constant.edge",
        "keyword.other.gdscript",
        "keyword.other.onready.gdscript",
        "source.graphql meta.fragment.graphql keyword.on.graphql",
        "source.graphql meta.type.interface.graphql keyword.implements.graphql",
        "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
        "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
        "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
        "keyword.operator.class.php",
        "keyword.operator.spread.php",
        "keyword.operator.type.php",
        "keyword.operator.increment-decrement.php",
        "keyword.operator.increment-increment.php",
        "punctuation.support.type.property-name.begin.json",
        "punctuation.support.type.property-name.end.json",
        "keyword.operator.string.php",
        "keyword.operator.ternary.php",
        "keyword.operator.variadic.php",
        "keyword.operator.nullable-type.php",
        "keyword.other.use-as.php",
        "keyword.import.go",
        "keyword.operator.address.go",
        "keyword.operator.null-coalescing",
        "keyword.operator.arrow",
        "keyword.struct.go",
        "keyword.operator.liquid",
        "keyword.operator.optional.ts",
        "keyword.cmake",
        "keyword.codetag.notation",
        "keyword.operator.pipe.shell"
      ],
      settings: {
        foreground: p.yellow
      }
    },
    {
      scope: [
        "meta.object-literal.key",
        "variable.object.property"
      ],
      settings: {
        foreground: p.fg
      }
    },
    {
      scope: [
        "keyword.other.definition.ini",
        "support.type.property-name",
        "entity.name.tag.yaml"
      ],
      settings: {
        foreground: p.yellow
      }
    },
    {
      scope: [
        "keyword.operator.comparison",
        "storage.type.function.arrow",
        "keyword.operator.lua",
        "keyword.operator.assignment",
        "keyword.operator.relational",
        "keyword.operator.increment",
        "keyword.operator.decrement",
        "keyword.operator.logical",
        "keyword.operator.arithmetic",
        "keyword.operator.math"
      ],
      settings: {
        foreground: p.yellow
      }
    },
    {
      scope: [
        "punctuation",
        "attribute_value",
        "meta.brace",
        "punctuation.definition.parameters",
        "punctuation.definition.template-expression",
        "keyword.operator",
        "keyword.other",
        "punctuation.terminator",
        "punctuation.separator",
        "punctuation.definition.generic.begin",
        "punctuation.definition.generic.end",
        "meta.function.type-declaration",
        "keyword.other.colon.elm",
        "meta.record.field.elm keyword.other.elm",
        "keyword.other.period.elm",
        "meta.tag.xml",
        "meta.tag.preprocessor.xml",
        "punctuation.definition.block",
        "punctuation.accessor",
        "constant.name.attribute.tag.pug",
        "string.interpolated.pug",
        "keyword.other.whitespace.liquid",
        "meta.tag.template.block.twig",
        "meta.tag.template.value.twig",
        "begin.bracket",
        "end.bracket",
        "text.html.twig meta.tag.inline.any",
        "text.html.twig meta.tag.block.any",
        "support.function.construct.begin.blade",
        "support.function.construct.end.blade source.php",
        "support.function.construct.end.blade",
        "meta.function.echo.blade source.php",
        "punctuation.definition.list.begin.python",
        "punctuation.definition.list.end.python",
        "text.html.vue-html meta.tag.block.any",
        "keyword.operator.assignment.tsx",
        "meta.definition.method.signature.java",
        "meta.class.body.groovy",
        "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
        "punctuation.definition.list.begin.erlang",
        "meta.expression.parenthesized",
        "meta.definition.function.swift meta.parameter-clause.swift",
        "source.swift meta.function-call.swift",
        "punctuation.section.embedded.end.swift source.swift",
        "source.lua",
        "meta.function.lua",
        "punctuation.definition.keyword.svelte",
        "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
        "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
        "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
        "source.graphql\tmeta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
        "punctuation.output.liquid",
        "text.html.liquid meta.tag.liquid punctuation.definition.tag.end.liquid",
        "JSXAttrs keyword.operator.assignment.jsx",
        "meta.tag.attributes.js keyword.operator.assignment.js"
      ],
      settings: {
        foreground: alpha(p.fg, 0.4)
      }
    },
    {
      scope: [
        "entity.name.package.go",
        "variable.language.this",
        "variable.language.special.self",
        "variable.parameter.function.language.special.self",
        "variable.language.this.php punctuation.definition.variable.php",
        "meta.class.body.php storage.type.php",
        "variable.parameter.function.swift entity.name.function.swift",
        "variable.other.jsdoc",
        "support.variable.drive.powershell",
        "entity.other.attribute.lua"
      ],
      settings: {
        foreground: p.orange
      }
    },
    {
      scope: [
        "storage",
        "meta.var.expr storage.type",
        "storage.type.function",
        "keyword.function",
        "storage.type.class",
        "storage.type.property",
        "keyword.other",
        "keyword.local.lua",
        "entity.name.class",
        "meta.function.lua keyword.control.lua",
        "storage.type.enum",
        "storage.type.interface",
        "storage.type.type",
        "entity.name.type.class.java",
        "support.class.php",
        "entity.other.inherited-class.php",
        "entity.name.type.class.groovy",
        "storage.type.rust",
        "entity.name.type.class.swift",
        "source.svelte meta.script.svelte source.ts entity.name.label.ts",
        "meta.directive.on.svelte keyword.control.svelte",
        "storage.type.const.gdscript",
        "storage.type.var.gdscript",
        "source.graphql declaration.meta.type keyword",
        "source.graphql meta.type.interface.graphql keyword.type.graphql",
        "source.graphql keyword.schema.graphql",
        "source.graphql keyword.operation.graphql",
        "source.graphql meta.enum.graphql keyword.enum.graphql",
        "source.graphql meta.fragment.graphql keyword.fragment.graphql",
        "storage.type.trait.php",
        "keyword.type.go",
        "keyword.var.go",
        "storage.type.powershell",
        "keyword.const.go",
        "keyword.storage.modifier"
      ],
      settings: {
        foreground: p.pine
      }
    },
    {
      scope: [
        "string",
        "string.template",
        "string.quoted.single",
        "punctuation.definition.string",
        "punctuation.definition.string.template",
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end.html source.js-ignored-vscode",
        "punctuation.definition.string.end.html source.js",
        "punctuation.definition.string.end.html.vue",
        "punctuation.definition.string.end.html source.ts",
        "punctuation.definition.string.end.html source.tsx",
        "punctuation.definition.string.end.html source.js.jsx",
        "punctuation.definition.string.end",
        "string.other.link",
        "constant.character.escape.regexp",
        "variable.parameter.url",
        "constant.other.symbol.quoted.single.erlang",
        "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
        "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
        "meta.import.ts punctuation.definition.variable.svelte",
        "punctuation.definition.string.end.html source.css-ignored-vscode",
        "text.html.edge punctuation.definition.variable.js",
        "string.unquoted.plain.out.yaml",
        "string.quoted.single.python punctuation.definition.string.begin.python",
        "string.quoted.single.python punctuation.definition.string.end.python",
        "punctuation.definition.string.end.html source.css",
        "string.quoted.double.html source.css",
        "punctuation.definition.subshell.single.shell",
        "punctuation.section.parenthese.shell"
      ],
      settings: {
        foreground: p.green
      }
    },
    {
      scope: [
        "string.quoted.docstring.multi.python",
        "string.quoted.double.block.python punctuation.definition.string.end.python",
        "string.quoted.double.block.python punctuation.definition.string.begin.python",
        "string.quoted.double.block.python",
        "punctuation.definition.string.begin.python",
        "punctuation.definition.string.end.python"
      ],
      settings: {
        foreground: alpha(p.olive, 0.8)
      }
    },
    {
      scope: [
        "entity.name.type",
        "support.type",
        "support.class",
        "storage.type",
        "entity.other.inherited-class",
        "keyword.type",
        "storage.type.java",
        "storage.type.primitive.java",
        "storage.type.generic.java",
        "keyword.other.type",
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php source.php",
        "punctuation.section.embedded.end.php",
        "storage.type.object.array.java",
        "storage.type.primitive.groovy",
        "storage.type.groovy",
        "meta.definition.type.body.swift meta.function-call.swift",
        "meta.definition.type.class.swift meta.inheritance-clause.swift",
        "variable.other.constant.elixir",
        "source.graphql declaration.meta.type support",
        "source.graphql meta.selections",
        "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
        "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
        "entity.name.type.class.php",
        "support.class.php",
        "entity.other.inherited-class.php",
        "entity.other.alias.php",
        "meta.group.simple.subexpression.powershell meta.scriptblock.powershell storage.type.powershell"
      ],
      settings: {
        foreground: p.violet
      }
    },
    {
      scope: [
        "variable",
        "variable.language",
        "entity.name.type.class.js",
        "entity.name.variable",
        "support.variable.magic",
        "meta.method.body",
        "entity.name.variable",
        "punctuation.definition.variable",
        "meta.class variable.object.property",
        "variable.other.constant entity.name.function",
        "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
        "meta.definition.variable.name.groovy",
        "meta.body.struct.cpp",
        "parameter.variable.function.elixir",
        "meta.directive.edge source.js",
        "meta.function.echo.edge source.js",
        "text.html.edge meta.function.echo.edge meta.function-call.js",
        "source.css variable.parameter.keyframe-list.css",
        "source.css meta.property-value.css",
        "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
        "source.css.scss meta.property-value.scss",
        "entity.name.variable.tuple-element",
        "meta.group.simple.subexpression.powershell support.variable.automatic.powershell",
        "support.variable.automatic.powershell",
        "storage.source.cmake",
        "entity.source.cmake"
      ],
      settings: {
        foreground: p.turquoise
      }
    },
    {
      scope: ["source.elm constant.type-constructor"],
      settings: {
        foreground: p.turquoise
      }
    },
    {
      scope: ["source.elm storage.type"],
      settings: {
        foreground: p.violet
      }
    },
    {
      scope: [
        "entity.name.tag.other.html",
        "entity.name.tag support.class.component",
        "support.class.component.html"
      ],
      settings: {
        foreground: p.violet
      }
    },
    {
      scope: [
        "source.diff meta.diff.header.to-file",
        "source.diff markup.inserted.diff",
        "source.diff punctuation.definition.to-file.diff",
        "source.diff punctuation.definition.inserted.diff"
      ],
      settings: {
        foreground: p.green
      }
    },
    {
      scope: [
        "source.diff punctuation.definition.from-file.diff",
        "source.diff meta.diff.header.from-file",
        "source.diff markup.deleted.diff",
        "source.diff punctuation.definition.deleted.diff"
      ],
      settings: {
        foreground: p.red
      }
    },
    {
      scope: ["source.diff meta.diff.header.command"],
      settings: {
        foreground: p.blue
      }
    },
    {
      scope: [
        "source.diff punctuation.definition.range.diff",
        "source.diff meta.diff.range.unified"
      ],
      settings: {
        foreground: p.orange
      }
    },
    {
      scope: [
        "support.variable.liquid",
        "support.class.liquid"
      ],
      settings: {
        foreground: p.turquoise
      }
    },
    {
      scope: [
        "text.html.basic entity.name",
        "source.js-ignored-vscode",
        "entity.name.tag",
        "meta.embedded.block.blade constant.other.php",
        "meta.embedded.block.blade keyword.operator.comparison.php",
        "meta.embedded.block.blade keyword.operator.arithmetic.php",
        "meta.tag.start.svelte keyword.control.svelte",
        "meta.tag.end.svelte keyword.control.svelte"
      ],
      settings: {
        foreground: p.blue
      }
    },
    {
      scope: [
        "meta.tag.sgml.doctype.html",
        "punctuation.definition.tag",
        "meta.tag.block.any",
        "meta.tag.block.any.html",
        "meta.tag.inline.any",
        "source.css-ignored-vscode",
        "meta.tag.metadata.style.end.html",
        "text.html.vue invalid.illegal.character-not-allowed-here.html",
        "meta.tag.inline.i.start.html",
        "meta.tag.structure.div.start.html",
        "punctuation.definition.tag.end.html.vue",
        "invalid.illegal.character-not-allowed-here.html"
      ],
      settings: {
        foreground: alpha(p.blue, 0.7)
      }
    },
    {
      scope: [
        "entity.other.attribute-name",
        "entity.name.tag.liquid",
        "invalid.deprecated.entity.other.attribute-name",
        "meta.embedded.block.blade storage.type.php"
      ],
      settings: {
        foreground: p.yellow
      }
    },
    {
      scope: [
        "markup.inline.raw.string.markdown",
        "punctuation.definition.raw.markdown",
        "markup.fenced_code.block.markdown",
        "markup.fenced_code.block.markdown punctuation",
        "markup.raw.block.markdown"
      ],
      settings: {
        foreground: p.violet
      }
    },
    {
      scope: ["fenced_code.block.language"],
      settings: {
        foreground: p.violet
      }
    },
    {
      scope: ["punctuation.definition.list.begin"],
      settings: {
        foreground: p.blue
      }
    },
    {
      scope: ["punctuation.definition.list.begin"],
      settings: {
        foreground: p.blue
      }
    },
    {
      scope: [
        "entity.name.section",
        "markup.heading.setext"
      ],
      settings: {
        foreground: p.yellow
      }
    },
    {
      scope: ["punctuation.definition.heading"],
      settings: {
        foreground: p.yellow
      }
    },
    {
      scope: [
        "markup.underline.link",
        "markup.underline.link.image"
      ],
      settings: {
        foreground: p.blue
      }
    },
    {
      scope: [
        "markup.bold",
        "punctuation.definition.bold"
      ],
      settings: {
        fontStyle: "bold",
        foreground: p.turquoise
      }
    },
    {
      scope: [
        "markup.strikethrough",
        "punctuation.definition.strikethrough"
      ],
      settings: {
        foreground: p.red
      }
    },
    {
      scope: [
        "markup.italic",
        "punctuation.definition.italic"
      ],
      settings: {
        fontStyle: "italic",
        foreground: p.orange
      }
    },
    {
      scope: [
        "markup.quote",
        "markup.quote.markdown punctuation.definition.quote.begin"
      ],
      settings: {
        foreground: p.purple
      }
    },
    {
      scope: ["punctuation.definition.quote.begin"],
      settings: {
        foreground: p.blue
      }
    },
    {
      scope: [
        "meta.embedded.block.frontmatter punctuation.definition.tag.begin",
        "meta.embedded.block.frontmatter punctuation.definition.tag.end",
        "meta.embedded.block.frontmatter string.unquoted.plain.out"
      ],
      settings: {
        fontStyle: "italic",
        foreground: p.fgMuted
      }
    },
    {
      scope: ["entity.other.attribute-name.pseudo-class"],
      settings: {
        foreground: p.purple
      }
    },
    {
      scope: ["entity.other.attribute-name.pseudo-element"],
      settings: {
        foreground: p.purple
      }
    },
    {
      scope: [
        "entity.other.attribute-name.class",
        "entity.other.attribute-name.class punctuation.definition.entity"
      ],
      settings: {
        foreground: p.pine
      }
    },
    {
      scope: ["entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"],
      settings: {
        foreground: p.pine
      }
    },
    {
      scope: [
        "support.type.property-name.css",
        "support.type.vendored.property-name",
        "meta.property-list entity.name.tag.css",
        "meta.property-list.scss meta.property-list.scss entity.name.tag.css",
        "meta.property-list meta.property-name",
        "source.css.scss meta.property-list.scss entity.name.tag.css"
      ],
      settings: {
        foreground: p.fg
      }
    },
    {
      scope: [
        "source.css.scss entity.other.attribute-name.id ",
        "source.css entity.other.attribute-name.id ",
        "entity.other.attribute-name.id punctuation.definition.entity"
      ],
      settings: {
        foreground: p.violet
      }
    },
    {
      scope: [
        "entity.name.tag.reference",
        "meta.property-list"
      ],
      settings: {
        foreground: p.orange
      }
    },
    {
      scope: ["keyword.other.unit"],
      settings: {
        foreground: p.orange
      }
    },
    {
      scope: [
        "support.constant.property-value",
        "support.constant.font-name",
        "meta.property-value.css",
        "meta.attribute.style.html"
      ],
      settings: {
        foreground: p.orange
      }
    },
    {
      scope: ["constant.numeric"],
      settings: {
        foreground: p.orange
      }
    },
    {
      scope: [
        "entity.name.tag.css",
        "meta.property-list.scss entity.name.tag.css"
      ],
      settings: {
        foreground: p.blue
      }
    }
  ]
});
