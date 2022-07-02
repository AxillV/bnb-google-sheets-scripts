function filterBlank(itemList) {
  var filtList = new Array();
  itemList.forEach(function(item){
    if (item!=""){
      filtList.push(item)
    }
  });
  return filtList;
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Refresh Sheet')
      .addItem('Confirm', 'OrdersRefreshButton')
      .addToUi();
}

function OrdersRefreshButton() {
  SpreadsheetApp.getUi()
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet1 = ss.getSheetByName('Raw Orders')
  var sheet2 = ss.getSheetByName('Filtered Orders #2')
  var sheet3 = ss.getSheetByName('Raw Blueprints')
  
  sheet1.clear()
  SpreadsheetApp.flush();
  sheet1.getRange(1, 1).setValue('=corporations_corporation_orders("Inaru Odoacer"; -1)') 
  
  sheet3.clear()
  SpreadsheetApp.flush()
  sheet3.getRange(1, 1).setValue('=corporations_corporation_blueprints("Inaru Odoacer"; -1)')
  
  sheet2.getRange(3, 3, 1000).setValue('');
  sheet2.getRange(3, 4, 1000).setValue('');
  sheet2.getRange(3, 5, 1000).setValue('');
  //Utilities.sleep(1000)
  //SpreadsheetApp.flush(); 
  sheet2.getRange(3, 9, 1000).setValue('');
  sheet2.getRange(3, 10, 1000).setValue('');
  sheet2.getRange(3, 11, 1000).setValue('');
  //Utilities.sleep(1000)
  SpreadsheetApp.flush();
  
  //Utilities.sleep(1000);
  //SpreadsheetApp.flush();
  sheet2.getRange(3, 3).setValue('=universe_names(A3:A)');
  sheet2.getRange(3, 9).setValue('=universe_names(G3:G)');
  //Utilities.sleep(1000)
  SpreadsheetApp.flush();
  
}

function myFunction() {
  var id = getItemId("Medium Shield Booster I")
  return id
}