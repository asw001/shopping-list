/**var state = {
	groceryList: {
	apples: 'unchecked',
	pears: 'checked',
	milk: 'unchecked',
	berries: 'unchecked',}
};**/

var state = {
	groceryList: {}
};


function createItem(item) { //made sense at the time to return an object;
 return {                   //key-pair value makes sense to refer to a tag
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
  return htmlVals.join("\n"); //get one element per line with newline
};

var addItem = function(state, item, status) {// state is defined globally, but we are passing vals
	//status = status || "unchecked";
	if(! (item in state.groceryList)) {
      state.groceryList[item] = "unchecked";
	}
	else {
	  state.groceryList[item] = status;	
	}
};

var getItemValue = function(state, item) {
	return state.groceryList[item];
}

var deleteItem = function(state, item) {
    delete state.groceryList[item];
};

var renderList = function(state, element) {
  var itemObjs = Object.keys(state.groceryList).map(function(key){//array of objects (list item dict)
    var itemObj = createItem(key);
    if (state.groceryList[key] == 'checked') {
	  itemObj.listHTML['span_shop_item'] = '<span class="shopping-item shopping-item__checked">' + itemObj.list_item_name + '</span>';
     }
    else {
      itemObj.listHTML['span_shop_item'] = '<span class="shopping-item">' + itemObj.list_item_name + '</span>';	
    }
    return itemObj;
  });
  
  var convertedItems = itemObjs.map(function(item) {//object values extracted
	var listItem = assembleHTML(item.listHTML) 
	return listItem;
  });
  
  element.html(convertedItems);
};


$(function() {

  $( document ).ready(function() {
    $('ul.shopping-list').empty();
});

  $('#js-shopping-list-form').on('submit', (function(event) {
    event.preventDefault();

    addItem(state, $(event.currentTarget).find('input[name="shopping-list-entry"]').val());
    renderList(state, $('ul.shopping-list'));
  }));
  
  $('ul.shopping-list').on('click', 'button.shopping-item-toggle', (function(event) {
    event.preventDefault();
    var itemStatus = getItemValue(state, $(this).parent().prev().text());

    if (itemStatus == 'checked') {
    	itemStatus = 'unchecked';
       }
    else {
    	itemStatus = 'checked';
      }

    addItem(state, $(this).parent().prev().text(), itemStatus);
    renderList(state, $('ul.shopping-list'));
   
  }));

$('ul.shopping-list').on('click', 'button.shopping-item-delete', (function(event) {
    event.preventDefault();
        
    deleteItem(state, $(this).parent().prev().text());
    renderList(state, $('ul.shopping-list'));
   
  }));
  
});