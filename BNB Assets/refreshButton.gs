function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Refresh Sheet')
      .addItem('Confirm', 'refreshGESI')
      .addToUi();
}