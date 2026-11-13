// テーマ本体。色はすべて semantic.mjs の役割名で参照する（hues.mjs は直接使わない）。
// alpha(color, 0〜1) で透明度を付けられる。
// 編集後は `nr build` で themes/*.json を再生成すること。

import { alpha } from "./color.mjs";

/** @param {typeof import('./semantic.mjs').default} s semantic colors */
export default (s) => ({
  colors: {
    contrastActiveBorder: alpha(s.ui.fg, 0),
    contrastBorder: alpha(s.ui.fg, 0),
    descriptionForeground: alpha(s.ui.fg, 0.8),
    disabledForeground: alpha(s.ui.fg, 0.3),
    errorForeground: s.status.error,
    focusBorder: s.ui.borderInput,
    foreground: s.ui.fg,
    "icon.foreground": alpha(s.ui.fg, 0.67),
    "selection.background": alpha(s.ui.accent, 0.38),
    "activityBar.activeBackground": alpha(s.ui.accent, 0.15),
    "activityBar.activeBorder": s.ui.accent,
    "activityBar.background": s.ui.bgSideBar,
    "activityBar.border": s.ui.border,
    "activityBar.dropBorder": alpha(s.ui.fgMuted, 0.2),
    "activityBar.foreground": s.ui.accent,
    "activityBar.inactiveForeground": s.ui.iconInactive,
    "activityBarBadge.background": s.ui.accent,
    "activityBarBadge.foreground": s.ui.bgSideBar,
    "activityBarTop.activeBorder": s.ui.accent,
    "activityBarTop.dropBorder": alpha(s.ui.fgMuted, 0.2),
    "activityBarTop.foreground": s.ui.accent,
    "activityBarTop.inactiveForeground": s.ui.iconInactiveTop,
    "badge.background": s.ui.accent,
    "badge.foreground": s.ui.bgSideBar,
    "breadcrumb.background": s.ui.bg,
    "breadcrumbPicker.background": s.ui.bgLightest,
    "button.background": alpha(s.ui.accent, 0.5),
    "button.border": alpha(s.ui.fg, 0.15),
    "button.foreground": s.ui.fg,
    "button.hoverBackground": alpha(s.ui.accent, 0.6),
    "button.secondaryBackground": s.ui.bgSecondary,
    "button.secondaryForeground": s.ui.fg,
    "button.secondaryHoverBackground": s.ui.borderWidget,
    "button.separator": alpha(s.ui.fg, 0.3),
    "charts.blue": s.chart.blue,
    "charts.foreground": s.ui.fg,
    "charts.green": s.chart.green,
    "charts.lines": s.ui.fg,
    "charts.orange": s.chart.orange,
    "charts.purple": s.chart.purple,
    "charts.red": s.chart.red,
    "charts.yellow": s.chart.yellow,
    "checkbox.foreground": s.ui.fg,
    "commandCenter.activeBackground": alpha(s.ui.bgWidget, 0.38),
    "commandCenter.activeForeground": alpha(s.ui.fg, 0.56),
    "commandCenter.background": s.ui.bg,
    "commandCenter.border": s.ui.border,
    "commandCenter.foreground": s.ui.fgMuted,
    "debugConsole.errorForeground": s.status.error,
    "debugConsole.infoForeground": s.status.info,
    "debugConsole.warningForeground": s.status.warning,
    "debugExceptionWidget.background": s.ui.bgWidget,
    "debugExceptionWidget.border": s.ui.border,
    "debugIcon.breakpointCurrentStackframeForeground": s.status.error,
    "debugIcon.breakpointDisabledForeground": alpha(s.status.error, 0.5),
    "debugIcon.breakpointForeground": s.status.error,
    "debugIcon.continueForeground": s.status.info,
    "debugIcon.disconnectForeground": s.status.error,
    "debugIcon.pauseForeground": s.status.error,
    "debugIcon.restartForeground": s.status.success,
    "debugIcon.startForeground": s.status.success,
    "debugIcon.stepBackForeground": s.status.info,
    "debugIcon.stepIntoForeground": s.status.info,
    "debugIcon.stepOutForeground": s.status.info,
    "debugIcon.stepOverForeground": s.status.info,
    "debugIcon.stopForeground": s.status.error,
    "debugToolBar.background": s.ui.bgDebugToolBar,
    "diffEditor.border": s.ui.border,
    "diffEditor.diagonalFill": s.ui.bgLightest,
    "diffEditor.insertedLineBackground": alpha(s.diff.inserted, 0.1),
    "diffEditor.insertedTextBackground": alpha(s.diff.inserted, 0.1),
    "diffEditor.insertedTextBorder": alpha(s.ui.fg, 0),
    "diffEditor.move.border": alpha(s.diff.moved, 0.3),
    "diffEditor.moveActive.border": alpha(s.diff.moved, 0.7),
    "diffEditor.removedLineBackground": alpha(s.diff.removed, 0.1),
    "diffEditor.removedTextBackground": alpha(s.diff.removed, 0.1),
    "diffEditor.removedTextBorder": alpha(s.ui.fg, 0),
    "diffEditor.unchangedCodeBackground": s.ui.bgUnchanged,
    "diffEditor.unchangedRegionBackground": s.ui.bgUnchanged,
    "diffEditor.unchangedRegionShadow": alpha(s.ui.fg, 0.2),
    "diffEditorGutter.insertedLineBackground": alpha(s.ui.fg, 0),
    "diffEditorGutter.removedLineBackground": alpha(s.ui.fg, 0),
    "diffEditorOverview.insertedForeground": alpha(s.diff.inserted, 0.15),
    "diffEditorOverview.removedForeground": alpha(s.diff.removed, 0.19),
    "dropdown.background": s.ui.bgWidget,
    "dropdown.border": s.ui.borderInput,
    "dropdown.foreground": s.ui.fg,
    "dropdown.listBackground": s.ui.bgWidget,
    "editor.background": s.ui.bg,
    "editor.findMatchBackground": alpha(s.ui.accent, 0.19),
    "editor.findMatchBorder": alpha(s.ui.accent, 0.38),
    "editor.findMatchHighlightBackground": alpha(s.ui.accent, 0.24),
    "editor.findMatchHighlightBorder": alpha(s.ui.accent, 0.36),
    "editor.foldBackground": alpha(s.ui.fg, 0.05),
    "editor.foldPlaceholderForeground": s.ui.fgMuted,
    "editor.foreground": s.ui.fg,
    "editor.hoverHighlightBackground": alpha(s.ui.accent, 0.3),
    "editor.inactiveSelectionBackground": alpha(s.ui.accent, 0.3),
    "editor.lineHighlightBackground": alpha(s.ui.accent, 0.06),
    "editor.lineHighlightBorder": alpha(s.ui.accent, 0.15),
    "editor.linkedEditingBackground": alpha(s.ui.linkedEditing, 0.2),
    "editor.rangeHighlightBackground": alpha(s.ui.accent, 0.24),
    "editor.selectionBackground": alpha(s.ui.accent, 0.3),
    "editor.selectionForeground": s.ui.fg,
    "editor.selectionHighlightBackground": alpha(s.ui.accent, 0.08),
    "editor.selectionHighlightBorder": alpha(s.ui.accent, 0.3),
    "editor.wordHighlightBackground": alpha(s.ui.accent, 0.12),
    "editor.wordHighlightBorder": alpha(s.ui.accent, 0.24),
    "editor.wordHighlightStrongBackground": alpha(s.ui.accent, 0.24),
    "editorBracketHighlight.foreground1": s.bracket[1],
    "editorBracketHighlight.foreground2": s.bracket[2],
    "editorBracketHighlight.foreground3": s.bracket[3],
    "editorBracketHighlight.foreground4": s.bracket[4],
    "editorBracketHighlight.foreground5": s.bracket[5],
    "editorBracketHighlight.foreground6": s.bracket[6],
    "editorBracketHighlight.unexpectedBracket.foreground": s.status.error,
    "editorBracketMatch.background": alpha(s.ui.accent, 0.3),
    "editorBracketMatch.border": alpha(s.ui.accent, 0.45),
    "editorCodeLens.foreground": alpha(s.ui.fg, 0.5),
    "editorCursor.background": s.ui.accent,
    "editorCursor.foreground": s.ui.cursor,
    "editorError.border": alpha(s.ui.fg, 0),
    "editorError.foreground": s.status.error,
    "editorGhostText.border": alpha(s.ui.fg, 0),
    "editorGhostText.foreground": alpha(s.ui.fg, 0.44),
    "editorGroup.border": s.ui.border,
    "editorGroup.dropBackground": alpha(s.ui.accent, 0.08),
    "editorGroupHeader.border": alpha(s.ui.fg, 0),
    "editorGroupHeader.noTabsBackground": s.ui.bg,
    "editorGroupHeader.tabsBackground": s.ui.bgSideBar,
    "editorGroupHeader.tabsBorder": s.ui.border,
    "editorGutter.addedBackground": alpha(s.diff.inserted, 0.8),
    "editorGutter.background": s.ui.bg,
    "editorGutter.commentRangeForeground": s.ui.bgWidget,
    "editorGutter.deletedBackground": alpha(s.diff.removed, 0.8),
    "editorGutter.modifiedBackground": alpha(s.diff.modified, 0.8),
    "editorHoverWidget.background": s.ui.bgWidget,
    "editorHoverWidget.border": s.ui.border,
    "editorIndentGuide.activeBackground1": alpha(s.ui.fgMuted, 0.8),
    "editorIndentGuide.background1": alpha(s.ui.fgMuted, 0.2),
    "editorInfo.border": alpha(s.ui.fg, 0),
    "editorInlayHint.background": alpha(s.ui.fg, 0.1),
    "editorInlayHint.foreground": alpha(s.ui.fg, 0.7),
    "editorInlayHint.parameterBackground": alpha(s.ui.fg, 0.1),
    "editorInlayHint.parameterForeground": alpha(s.ui.fg, 0.7),
    "editorInlayHint.typeBackground": alpha(s.ui.fg, 0.1),
    "editorInlayHint.typeForeground": alpha(s.ui.fg, 0.7),
    "editorLineNumber.activeForeground": s.ui.lineNumberActive,
    "editorLineNumber.foreground": s.ui.lineNumber,
    "editorLink.activeForeground": s.ui.fg,
    "editorMarkerNavigation.background": s.ui.bgSideBar,
    "editorMarkerNavigationError.background": alpha(s.status.error, 0.56),
    "editorMarkerNavigationInfo.background": alpha(s.status.info, 0.56),
    "editorMarkerNavigationWarning.background": alpha(s.status.warning, 0.56),
    "editorOverviewRuler.addedForeground": alpha(s.diff.inserted, 0.5),
    "editorOverviewRuler.border": s.ui.border,
    "editorOverviewRuler.deletedForeground": alpha(s.diff.removed, 0.5),
    "editorOverviewRuler.errorForeground": s.status.error,
    "editorOverviewRuler.incomingContentForeground": alpha(s.diff.inserted, 0.5),
    "editorOverviewRuler.infoForeground": alpha(s.status.info, 0.5),
    "editorOverviewRuler.modifiedForeground": alpha(s.diff.modified, 0.5),
    "editorOverviewRuler.selectionHighlightForeground": alpha(s.ui.accent, 0.5),
    "editorOverviewRuler.warningForeground": s.status.warning,
    "editorRuler.foreground": alpha(s.ui.fgMuted, 0.2),
    "editorStickyScroll.shadow": alpha(s.ui.fg, 0.2),
    "editorStickyScrollHover.background": s.ui.bgWidgetAlt,
    "editorSuggestWidget.background": s.ui.bgWidget,
    "editorSuggestWidget.border": s.ui.border,
    "editorSuggestWidget.foreground": s.ui.fg,
    "editorSuggestWidget.highlightForeground": s.ui.highlight,
    "editorSuggestWidget.selectedBackground": s.ui.bgSelectedItem,
    "editorSuggestWidget.selectedIconForeground": s.ui.fg,
    "editorUnnecessaryCode.border": alpha(s.ui.fg, 0),
    "editorUnnecessaryCode.opacity": alpha(s.ui.fg, 0.67),
    "editorWarning.border": alpha(s.ui.fg, 0),
    "editorWarning.foreground": s.status.caution,
    "editorWhitespace.foreground": alpha(s.ui.fgMuted, 0.38),
    "editorWidget.background": s.ui.bgWidget,
    "editorWidget.border": s.ui.borderWidget,
    "editorWidget.resizeBorder": alpha(s.ui.accent, 0.31),
    "errorLens.errorForeground": alpha(s.status.error, 0.99),
    "errorLens.hintForeground": alpha(s.status.info, 0.99),
    "errorLens.infoForeground": alpha(s.status.info, 0.99),
    "errorLens.warningForeground": alpha(s.status.warning, 0.99),
    "extensionButton.background": alpha(s.ui.accent, 0.5),
    "extensionButton.foreground": s.ui.fg,
    "extensionButton.hoverBackground": alpha(s.ui.accent, 0.6),
    "extensionButton.prominentBackground": alpha(s.ui.accent, 0.62),
    "extensionButton.prominentForeground": s.ui.fg,
    "extensionButton.prominentHoverBackground": s.ui.accent,
    "gitDecoration.conflictingResourceForeground": s.ui.accent,
    "gitDecoration.deletedResourceForeground": s.diff.removed,
    "gitDecoration.ignoredResourceForeground": s.ui.fgMuted,
    "gitDecoration.modifiedResourceForeground": s.diff.modified,
    "gitDecoration.untrackedResourceForeground": s.diff.inserted,
    "multiDiffEditor.border": s.ui.border,
    "multiDiffEditor.headerBackground": s.ui.bgSelectedItem,
    "scmGraph.foreground1": s.scmGraph[1],
    "scmGraph.foreground2": s.scmGraph[2],
    "scmGraph.foreground3": s.scmGraph[3],
    "scmGraph.foreground4": s.scmGraph[4],
    "scmGraph.foreground5": s.scmGraph[5],
    "scmGraph.historyItemBaseRefColor": s.scmGraph.baseRef,
    "scmGraph.historyItemHoverAdditionsForeground": s.diff.inserted,
    "scmGraph.historyItemHoverDefaultLabelBackground": s.ui.fg,
    "scmGraph.historyItemHoverDefaultLabelForeground": s.ui.fg,
    "scmGraph.historyItemHoverDeletionsForeground": s.diff.removed,
    "scmGraph.historyItemHoverLabelForeground": s.ui.fg,
    "scmGraph.historyItemRefColor": s.scmGraph.ref,
    "scmGraph.historyItemRemoteRefColor": s.scmGraph.remoteRef,
    "inlineChat.background": s.ui.bgLightest,
    "inlineChat.border": s.ui.borderWidget,
    "inlineChatInput.background": s.ui.bgWidget,
    "inlineChatInput.border": s.ui.borderWidget,
    "inlineChatInput.focusBorder": s.ui.borderInput,
    "inlineEdit.gutterIndicator.background": alpha(s.ui.fg, 0.5),
    "inlineEdit.gutterIndicator.primaryBackground": alpha(s.diff.inlineEditPrimary, 0.7),
    "inlineEdit.gutterIndicator.primaryBorder": alpha(s.diff.inlineEditPrimary, 0),
    "inlineEdit.gutterIndicator.primaryForeground": s.ui.fg,
    "inlineEdit.gutterIndicator.secondaryBackground": alpha(s.diff.inlineEditSecondary, 0.7),
    "inlineEdit.gutterIndicator.secondaryBorder": alpha(s.diff.inlineEditSecondary, 0),
    "inlineEdit.gutterIndicator.secondaryForeground": s.ui.fg,
    "inlineEdit.gutterIndicator.successfulBackground": alpha(s.diff.inlineEditSuccess, 0.7),
    "inlineEdit.gutterIndicator.successfulBorder": alpha(s.diff.inlineEditSuccess, 0),
    "inlineEdit.gutterIndicator.successfulForeground": s.ui.fg,
    "inlineEdit.modifiedBackground": alpha(s.diff.inserted, 0.15),
    "inlineEdit.modifiedBorder": alpha(s.diff.inserted, 0.8),
    "inlineEdit.modifiedChangedLineBackground": alpha(s.diff.inserted, 0.08),
    "inlineEdit.modifiedChangedTextBackground": alpha(s.ui.fg, 0),
    "inlineEdit.originalBackground": alpha(s.diff.removed, 0.15),
    "inlineEdit.originalBorder": alpha(s.diff.removed, 0.8),
    "inlineEdit.originalChangedLineBackground": alpha(s.diff.removed, 0.8),
    "inlineEdit.originalChangedTextBackground": alpha(s.ui.fg, 0),
    "inlineEdit.tabWillAcceptModifiedBorder": s.diff.inserted,
    "inlineEdit.tabWillAcceptOriginalBorder": s.diff.removed,
    "input.background": s.ui.bgWidget,
    "input.border": s.ui.borderInput,
    "input.foreground": s.ui.fg,
    "input.placeholderForeground": s.ui.placeholder,
    "inputOption.activeBackground": s.ui.placeholder,
    "inputOption.activeBorder": alpha(s.ui.fg, 0),
    "inputOption.activeForeground": s.ui.fg,
    "inputOption.hoverBackground": s.ui.borderWidget,
    "inputValidation.errorBackground": s.ui.bgWidget,
    "inputValidation.errorBorder": s.status.caution,
    "inputValidation.infoBackground": s.ui.bgWidget,
    "inputValidation.infoBorder": s.ui.accent,
    "inputValidation.warningBackground": s.ui.bgWidget,
    "inputValidation.warningBorder": s.status.caution,
    "keybindingLabel.background": s.ui.bgWidget,
    "keybindingLabel.border": s.ui.fgMuted,
    "keybindingLabel.bottomBorder": s.ui.fgMuted,
    "keybindingLabel.foreground": s.ui.fg,
    "list.activeSelectionBackground": alpha(s.ui.fgMuted, 0.2),
    "list.activeSelectionForeground": s.ui.fg,
    "list.dropBackground": alpha(s.ui.accent, 0.08),
    "list.errorForeground": s.status.error,
    "list.focusBackground": alpha(s.ui.accent, 0.25),
    "list.focusForeground": s.ui.fg,
    "list.highlightForeground": s.ui.highlight,
    "list.hoverBackground": alpha(s.ui.fgMuted, 0.1),
    "list.hoverForeground": s.ui.fg,
    "list.inactiveSelectionBackground": alpha(s.ui.fgMuted, 0.12),
    "list.inactiveSelectionForeground": s.ui.fg,
    "list.warningForeground": s.status.warning,
    "menu.background": s.ui.bgWidget,
    "menu.border": s.ui.border,
    "menu.foreground": s.ui.fg,
    "menu.selectionForeground": s.ui.fg,
    "menu.separatorBackground": alpha(s.ui.border, 0.4),
    "menubar.selectionBackground": s.ui.bgWidget,
    "menubar.selectionForeground": s.ui.fg,
    "merge.border": s.ui.border,
    "merge.commonContentBackground": alpha(s.diff.moved, 0.19),
    "merge.commonHeaderBackground": alpha(s.diff.moved, 0.5),
    "merge.currentContentBackground": alpha(s.diff.inserted, 0.19),
    "merge.currentHeaderBackground": alpha(s.diff.inserted, 0.5),
    "merge.incomingContentBackground": alpha(s.diff.modified, 0.19),
    "merge.incomingHeaderBackground": alpha(s.diff.modified, 0.5),
    "minimap.background": s.ui.bg,
    "minimap.errorHighlight": s.status.error,
    "minimap.findMatchHighlight": s.ui.accent,
    "minimap.selectionHighlight": s.ui.accent,
    "minimap.selectionOccurrenceHighlight": s.ui.accent,
    "minimap.warningHighlight": s.status.warning,
    "minimapGutter.addedBackground": s.diff.inserted,
    "minimapGutter.deletedBackground": s.diff.removed,
    "minimapGutter.modifiedBackground": s.diff.modified,
    "notificationCenterHeader.background": s.ui.bgWidget,
    "notificationCenterHeader.foreground": s.ui.fg,
    "notificationLink.foreground": s.ui.highlight,
    "notifications.background": s.ui.bgWidget,
    "notifications.border": s.ui.border,
    "notifications.foreground": s.ui.fg,
    "notificationsErrorIcon.foreground": s.status.error,
    "notificationsInfoIcon.foreground": s.status.info,
    "notificationsWarningIcon.foreground": s.status.warning,
    "panel.background": s.ui.bgPanel,
    "panel.border": s.ui.border,
    "panel.dropBorder": alpha(s.ui.fgMuted, 0.5),
    "panelInput.border": s.ui.borderWidget,
    "panelSection.border": s.ui.border,
    "panelSectionHeader.background": s.ui.bgSecondary,
    "panelSectionHeader.border": s.ui.border,
    "panelSectionHeader.foreground": s.ui.fg,
    "panelTitle.activeBorder": s.ui.accent,
    "panelTitle.activeForeground": s.ui.accent,
    "panelTitle.inactiveForeground": s.ui.fgMuted,
    "peekView.border": s.ui.border,
    "peekViewEditor.background": s.ui.bgPeekEditor,
    "peekViewEditor.matchHighlightBackground": alpha(s.ui.bgWidget, 0.25),
    "peekViewEditor.matchHighlightBorder": alpha(s.ui.fg, 0),
    "peekViewEditorGutter.background": s.ui.bgPeekEditor,
    "peekViewEditorStickyScroll.background": s.ui.bgWidgetAlt,
    "peekViewResult.background": s.ui.bgPeekResult,
    "peekViewResult.fileForeground": s.ui.fg,
    "peekViewResult.lineForeground": s.ui.fg,
    "peekViewResult.matchHighlightBackground": alpha(s.ui.accent, 0.5),
    "peekViewResult.selectionBackground": alpha(s.ui.accent, 0.2),
    "peekViewResult.selectionForeground": s.ui.fg,
    "peekViewTitle.background": s.ui.bgLightest,
    "peekViewTitleDescription.foreground": s.ui.fg,
    "peekViewTitleLabel.foreground": s.ui.fg,
    "pickerGroup.border": s.ui.border,
    "pickerGroup.foreground": s.ui.fg,
    "profileBadge.background": s.ui.accent,
    "profileBadge.foreground": s.ui.bg,
    "progressBar.background": s.ui.highlight,
    "quickInput.background": s.ui.bgWidgetAlt,
    "quickInput.foreground": s.ui.fg,
    "quickInputList.focusBackground": alpha(s.ui.fgMuted, 0.2),
    "quickInputList.focusForeground": s.ui.fg,
    "quickInputList.focusIconForeground": s.ui.fg,
    "quickInputTitle.background": s.ui.bgSideBar,
    "sash.hoverBorder": alpha(s.ui.accent, 0.31),
    "scrollbar.shadow": alpha(s.ui.fg, 0.2),
    "scrollbarSlider.activeBackground": alpha(s.ui.fg, 0.3),
    "scrollbarSlider.background": alpha(s.ui.fg, 0.15),
    "scrollbarSlider.hoverBackground": alpha(s.ui.fg, 0.2),
    "settings.headerForeground": s.ui.fg,
    "settings.modifiedItemIndicator": s.ui.accent,
    "settings.settingsHeaderHoverForeground": s.ui.fg,
    "sideBar.background": s.ui.bgSideBar,
    "sideBar.border": s.ui.border,
    "sideBar.foreground": alpha(s.ui.fg, 0.8),
    "sideBarSectionHeader.background": s.ui.bgSideBar,
    "sideBarSectionHeader.border": s.ui.border,
    "sideBarSectionHeader.foreground": s.ui.fg,
    "sideBarStickyScroll.background": s.ui.bgStickyScroll,
    "sideBarStickyScroll.shadow": alpha(s.ui.fg, 0.2),
    "sideBarTitle.foreground": s.ui.fgMuted,
    "statusBar.background": s.ui.bg,
    "statusBar.border": s.ui.border,
    "statusBar.debuggingBackground": s.status.debuggingBg,
    "statusBar.debuggingForeground": s.status.debuggingFg,
    "statusBar.foreground": alpha(s.ui.fg, 0.5),
    "statusBar.noFolderBackground": s.ui.bgSideBar,
    "statusBar.noFolderBorder": s.ui.border,
    "statusBar.noFolderForeground": alpha(s.ui.fg, 0.8),
    "statusBarItem.activeBackground": s.ui.bgWidget,
    "statusBarItem.compactHoverBackground": alpha(s.ui.accent, 0.8),
    "statusBarItem.hoverBackground": s.status.itemHover,
    "statusBarItem.hoverForeground": s.ui.fg,
    "statusBarItem.prominentBackground": s.ui.bg,
    "statusBarItem.prominentForeground": s.ui.bg,
    "statusBarItem.prominentHoverBackground": s.ui.white,
    "statusBarItem.prominentHoverForeground": s.ui.bg,
    "statusBarItem.errorBackground": s.status.error,
    "statusBarItem.errorForeground": s.ui.bg,
    "statusBarItem.errorHoverBackground": s.status.errorHover,
    "statusBarItem.errorHoverForeground": s.ui.bg,
    "statusBarItem.offlineBackground": s.status.offline,
    "statusBarItem.offlineForeground": s.ui.bg,
    "statusBarItem.offlineHoverBackground": s.status.offlineHover,
    "statusBarItem.offlineHoverForeground": s.ui.bg,
    "statusBarItem.remoteBackground": s.status.remote,
    "statusBarItem.remoteForeground": s.ui.bg,
    "statusBarItem.remoteHoverBackground": s.status.remoteHover,
    "statusBarItem.remoteHoverForeground": s.ui.bg,
    "statusBarItem.warningBackground": s.status.warning,
    "statusBarItem.warningForeground": s.ui.bg,
    "statusBarItem.warningHoverBackground": s.status.warningHover,
    "statusBarItem.warningHoverForeground": s.ui.bg,
    "tab.activeBackground": s.ui.bg,
    "tab.activeBorder": s.ui.bg,
    "tab.activeBorderTop": s.ui.accent,
    "tab.activeForeground": s.ui.fg,
    "tab.border": s.ui.border,
    "tab.hoverBackground": s.ui.bg,
    "tab.inactiveBackground": s.ui.bgSideBar,
    "tab.inactiveForeground": s.ui.fgMuted,
    "tab.lastPinnedBorder": s.ui.border,
    "tab.unfocusedActiveBorder": s.ui.bg,
    "tab.unfocusedActiveForeground": s.ui.accent,
    "tab.unfocusedHoverBackground": s.ui.bg,
    "tab.unfocusedInactiveForeground": s.ui.fgMuted,
    "terminal.ansiBlack": s.ansi.black,
    "terminal.ansiBlue": s.ansi.blue,
    "terminal.ansiBrightBlack": s.ansi.brightBlack,
    "terminal.ansiBrightBlue": s.ansi.brightBlue,
    "terminal.ansiBrightCyan": s.ansi.brightCyan,
    "terminal.ansiBrightGreen": s.ansi.brightGreen,
    "terminal.ansiBrightMagenta": s.ansi.brightMagenta,
    "terminal.ansiBrightRed": s.ansi.brightRed,
    "terminal.ansiBrightWhite": s.ansi.brightWhite,
    "terminal.ansiBrightYellow": s.ansi.brightYellow,
    "terminal.ansiCyan": s.ansi.cyan,
    "terminal.ansiGreen": s.ansi.green,
    "terminal.ansiMagenta": s.ansi.magenta,
    "terminal.ansiRed": s.ansi.red,
    "terminal.ansiWhite": s.ansi.white,
    "terminal.ansiYellow": s.ansi.yellow,
    "terminal.background": s.ui.bgPanel,
    "terminal.foreground": s.ui.fg,
    "terminal.selectionForeground": s.ui.fg,
    "terminalCursor.background": s.ui.bg,
    "terminalCursor.foreground": s.ui.cursor,
    "terminalStickyScrollHover.background": s.ui.bgWidgetAlt,
    "textBlockQuote.background": alpha(s.status.info, 0.2),
    "textBlockQuote.border": alpha(s.status.info, 0.73),
    "textCodeBlock.background": s.ui.preformatBg,
    "textLink.activeForeground": s.ui.accent,
    "textLink.foreground": s.ui.accent,
    "textPreformat.background": s.ui.preformatBg,
    "textPreformat.foreground": s.ui.preformatFg,
    "textSeparator.foreground": s.ui.accent,
    "titleBar.activeBackground": s.ui.bgTitleBar,
    "titleBar.activeForeground": alpha(s.ui.fg, 0.6),
    "titleBar.border": s.ui.border,
    "titleBar.inactiveBackground": s.ui.bgTitleBar,
    "titleBar.inactiveForeground": alpha(s.ui.fg, 0.6),
    "toolbar.activeBackground": alpha(s.ui.fgMuted, 0.5),
    "toolbar.hoverBackground": alpha(s.ui.fgMuted, 0.3),
    "tree.indentGuidesStroke": alpha(s.ui.fgMuted, 0.44),
    "walkThrough.embeddedEditorBackground": s.ui.bg,
    "welcomePage.progress.background": s.ui.bgWidget,
    "welcomePage.progress.foreground": s.ui.accent,
    "welcomePage.tileBackground": alpha(s.ui.fg, 0.1),
    "welcomePage.tileBorder": alpha(s.ui.fg, 0.2),
    "welcomePage.tileHoverBackground": alpha(s.ui.fg, 0.2),
    "widget.shadow": alpha(s.ui.fg, 0.05)
  },
  name: "Mochi Light",
  semanticHighlighting: true,
  semanticTokenColors: {
    "class.declaration": {
      foreground: s.syntax.type
    },
    "class.decorator": {
      foreground: s.syntax.decorator
    },
    enumMember: {
      foreground: s.syntax.type
    },
    "meta.decorator": {
      foreground: s.syntax.decorator
    },
    namespace: {
      foreground: s.syntax.function
    },
    parameter: {
      foreground: s.syntax.decorator
    },
    property: {
      foreground: s.syntax.property
    },
    "property.declaration": {
      foreground: s.syntax.plain
    },
    variable: {
      foreground: s.syntax.variable
    },
    "variable.defaultLibrary": {
      foreground: s.syntax.storage
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
        foreground: s.syntax.property
      }
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: s.syntax.typeName
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
        foreground: alpha(s.syntax.comment, 0.7)
      }
    },
    {
      scope: [
        "constant",
        "support.constant.core.php"
      ],
      settings: {
        foreground: s.syntax.constant
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
        foreground: s.syntax.plain
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
        foreground: s.syntax.decorator
      }
    },
    {
      scope: [
        "keyword.control.export",
        "support.type.object.module"
      ],
      settings: {
        foreground: s.syntax.keyword
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
        foreground: s.syntax.function
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
        foreground: s.syntax.keyword
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
        foreground: s.syntax.keyword
      }
    },
    {
      scope: [
        "meta.object-literal.key",
        "variable.object.property"
      ],
      settings: {
        foreground: s.syntax.plain
      }
    },
    {
      scope: [
        "keyword.other.definition.ini",
        "support.type.property-name",
        "entity.name.tag.yaml"
      ],
      settings: {
        foreground: s.syntax.keyword
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
        foreground: s.syntax.keyword
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
        foreground: alpha(s.syntax.punctuation, 0.4)
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
        foreground: s.syntax.property
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
        foreground: s.syntax.storage
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
        foreground: s.syntax.string
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
        foreground: alpha(s.syntax.docstring, 0.8)
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
        foreground: s.syntax.type
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
        foreground: s.syntax.variable
      }
    },
    {
      scope: ["source.elm constant.type-constructor"],
      settings: {
        foreground: s.syntax.variable
      }
    },
    {
      scope: ["source.elm storage.type"],
      settings: {
        foreground: s.syntax.type
      }
    },
    {
      scope: [
        "entity.name.tag.other.html",
        "entity.name.tag support.class.component",
        "support.class.component.html"
      ],
      settings: {
        foreground: s.syntax.type
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
        foreground: s.syntax.string
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
        foreground: s.syntax.constant
      }
    },
    {
      scope: ["source.diff meta.diff.header.command"],
      settings: {
        foreground: s.syntax.function
      }
    },
    {
      scope: [
        "source.diff punctuation.definition.range.diff",
        "source.diff meta.diff.range.unified"
      ],
      settings: {
        foreground: s.syntax.property
      }
    },
    {
      scope: [
        "support.variable.liquid",
        "support.class.liquid"
      ],
      settings: {
        foreground: s.syntax.variable
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
        foreground: s.syntax.function
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
        foreground: alpha(s.syntax.function, 0.7)
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
        foreground: s.syntax.keyword
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
        foreground: s.syntax.type
      }
    },
    {
      scope: ["fenced_code.block.language"],
      settings: {
        foreground: s.syntax.type
      }
    },
    {
      scope: ["punctuation.definition.list.begin"],
      settings: {
        foreground: s.syntax.function
      }
    },
    {
      scope: ["punctuation.definition.list.begin"],
      settings: {
        foreground: s.syntax.function
      }
    },
    {
      scope: [
        "entity.name.section",
        "markup.heading.setext"
      ],
      settings: {
        foreground: s.syntax.keyword
      }
    },
    {
      scope: ["punctuation.definition.heading"],
      settings: {
        foreground: s.syntax.keyword
      }
    },
    {
      scope: [
        "markup.underline.link",
        "markup.underline.link.image"
      ],
      settings: {
        foreground: s.syntax.function
      }
    },
    {
      scope: [
        "markup.bold",
        "punctuation.definition.bold"
      ],
      settings: {
        fontStyle: "bold",
        foreground: s.syntax.variable
      }
    },
    {
      scope: [
        "markup.strikethrough",
        "punctuation.definition.strikethrough"
      ],
      settings: {
        foreground: s.syntax.constant
      }
    },
    {
      scope: [
        "markup.italic",
        "punctuation.definition.italic"
      ],
      settings: {
        fontStyle: "italic",
        foreground: s.syntax.property
      }
    },
    {
      scope: [
        "markup.quote",
        "markup.quote.markdown punctuation.definition.quote.begin"
      ],
      settings: {
        foreground: s.syntax.decorator
      }
    },
    {
      scope: ["punctuation.definition.quote.begin"],
      settings: {
        foreground: s.syntax.function
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
        foreground: s.syntax.comment
      }
    },
    {
      scope: ["entity.other.attribute-name.pseudo-class"],
      settings: {
        foreground: s.syntax.decorator
      }
    },
    {
      scope: ["entity.other.attribute-name.pseudo-element"],
      settings: {
        foreground: s.syntax.decorator
      }
    },
    {
      scope: [
        "entity.other.attribute-name.class",
        "entity.other.attribute-name.class punctuation.definition.entity"
      ],
      settings: {
        foreground: s.syntax.storage
      }
    },
    {
      scope: ["entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"],
      settings: {
        foreground: s.syntax.storage
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
        foreground: s.syntax.plain
      }
    },
    {
      scope: [
        "source.css.scss entity.other.attribute-name.id ",
        "source.css entity.other.attribute-name.id ",
        "entity.other.attribute-name.id punctuation.definition.entity"
      ],
      settings: {
        foreground: s.syntax.type
      }
    },
    {
      scope: [
        "entity.name.tag.reference",
        "meta.property-list"
      ],
      settings: {
        foreground: s.syntax.property
      }
    },
    {
      scope: ["keyword.other.unit"],
      settings: {
        foreground: s.syntax.property
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
        foreground: s.syntax.property
      }
    },
    {
      scope: ["constant.numeric"],
      settings: {
        foreground: s.syntax.property
      }
    },
    {
      scope: [
        "entity.name.tag.css",
        "meta.property-list.scss entity.name.tag.css"
      ],
      settings: {
        foreground: s.syntax.function
      }
    }
  ]
});
