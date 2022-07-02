function getSingleJobCost(item) {
  var url = "http://api.eve-industry.org/job-base-cost.xml?names=" + item;
  var xml = UrlFetchApp.fetch(url).getContentText();
  var document = XmlService.parse(xml);
  var desc = document.getDescendants();
  return desc[2].getValue()
}

function getJobCost(list) {
  //list = ["Atron", "Caracal"];
  finalList = [];
  for (i in list) {
    finalList.push(getSingleJobCost(list[i]));
  }
  //Logger.log(finalList)
  return finalList;
}

function getSystemIndex(item) {
  var url = "http://api.eve-industry.org/system-cost-index.xml?name=GE-8JV";
  var xml = UrlFetchApp.fetch(url).getContentText();
  var document = XmlService.parse(xml);
  var desc = document.getDescendants();
  //Logger.log(desc[2].getValue().split('\n')[1])
  return desc[2].getValue().split('\n')[1]
}