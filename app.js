
var state = {
	groceryList: {
	apples: 'unchecked',
	pears: 'checked',
	milk: 'unchecked',
	berries: 'unchecked',}
}

function createItem(item) {
 return {
	      list_item_name: item,
		  listHTML: {
	      list_open: '<li>',
		  span_shop_item: '<span class="shopping-item">' + item + '</span>',
		  div_open: '<div class="shopping-item-controls">',
		  button_toggle_open: '<button class="shopping-item-toggle">',
		  span_button_check:  '<span class="button-label">check</span>',
		  button_toggle_close: '</button>',
		  button_delete_open: '<button class="shopping-item-delete">',
		  span_button_delete: '<span class="button-label">delete</span>',
		  button_delete_close: '</button>',
		  div_close: '</div>',
		  list_close: '</li>'
	      }
        };
	};
	
function assembleHTML(itemObj) {
  var htmlVals = Object.keys(itemObj).map(function(key) {
    return itemObj[key];
  });
  return htmlVals.join("\n");
};

var addItem = function(state, item) {
    if( typeof item === 'undefined' || variable === null ){
	  alert("Enter a valid list item");
	}
    state.push(item);
};

var renderList = function(state, element) {
  var itemObjs = Object.keys(state.groceryList).map(function(key){
    var itemObj = createItem(key);
    if (state.groceryList[key] == 'checked') {
	  itemObj.listHTML['span_shop_item'] = '<span class="shopping-item shopping-item__checked">' + itemObj.list_item_name + '</span>';
     }
    return itemObj;
  });
  
  var convertedItems = itemObjs.map(function(item) {
	var listItem = assembleHTML(item.listHTML) 
	return listItem;
  });
  
  element.html(convertedItems);
};



$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  addItem(state, $(event.currentTarget).find('input[name="shopping-list-entry"]').val());
  renderList(state, $('ul.shopping-list'));
});

