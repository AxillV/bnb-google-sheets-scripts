/** 
* Returns the ID of an item.
* @param {string} name (Required) An Item Name.
* @return ItemID
* @customfunction
*/
function getItemId(name) {
  var resp = UrlFetchApp.fetch("https://esi.evetech.net/latest/search/?categories=inventory_type&strict=true&search=" + name)
  var js = JSON.parse(resp)
  return js.inventory_type[0]
}

/** 
* Returns the name of an item.
* @param {string} id (Required) An ItemID.
* @return Item Name
* @customfunction
*/
function getItemName(id) {
  var resp = UrlFetchApp.fetch("https://esi.evetech.net/latest/universe/types/" + id)
  var js = JSON.parse(resp)
  return js.name
}