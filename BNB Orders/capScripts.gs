function refreshCapCosts() {
  SpreadsheetApp.flush();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var priceSheet = ss.getSheetByName('Cap Profit Summary');
  var capSheet = ss.getSheetByName('Cap Production Cost');
  var capCompSheet = ss.getSheetByName('Cap Component Needed');
 
  var currentHull;
  var totalRows = priceSheet.getLastRow()
  var totalCost = 0;
  var singleCost = 0;
  
  var i;
  var j;
  
  var hullNames = priceSheet.getRange(2, 1, priceSheet.getLastRow() - 1).getValues();
  
  for (i = 2; i < totalRows + 1; i++) { 
    totalCost = 0;
    currentHull = hullNames[i - 2];
    
    capSheet.getRange(42, 1).setValue("");
    capSheet.getRange(20, 1).setValue("");
    SpreadsheetApp.flush();
    
    capSheet.getRange(42, 1).setValue(currentHull);
    SpreadsheetApp.flush();
    
    capSheet.getRange(20, 1).setValue('=getSingleJobCost("' + currentHull + '")')
    SpreadsheetApp.flush();
    
    var singleCost = capSheet.getRange(23, 7, 20).getValues()
    
    for (j = 0; j < 20; j++){
      //totalCost = totalCost + capSheet.getRange(23+j, 7).getValue();
      totalCost = totalCost + singleCost[j][0];
    }
    priceSheet.getRange(i, 4).setValue('='+totalCost+' + B'+i);
    SpreadsheetApp.flush();
  }
  SpreadsheetApp.flush();
}