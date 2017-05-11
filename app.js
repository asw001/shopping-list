

function createItem(item) {
 return {
	      list_item_name: item,
		  listHTML: {
	      list_open: '<li>',
		  span_shop_item: '<span class="shopping-item">' + this.list_item_name + '</span>',
		  div_open: '<div class="shopping-item-controls">',
		  button_toggle_open: '<button class="shopping-item-toggle">',
		  span_button_check:  '<span class="button-label">check</span>',
		  button_toggle_close: ' </button>',
		  button_delete_open: '<button class="shopping-item-delete">',
		  span_button_delete: '<span class="button-label">delete</span>',
		  button_delete_close: '</button>',
		  div_close: '</div>',
		  list_close: '</li>'
	      }
        };
}

function assembleHTML(itemObj) {
  var htmlVals = Object.keys(itemObj).map(function (key) {
    return itemObj[key];
  });
  return htmlVals.join("\n");
}

function addShoppingItem(item, state) {
	var itemObj = createItem(item);
	if (state[item] == 'checked') {
	  itemObj.span_shop_item = '<span class="shopping-item shopping-item__checked">' + this.list_item_name + '</span>';
     }
    $('ul.shopping-list').append(assembleHTML(itemObj.listHTML));
 }


function getFormInput() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var item = $(event.currentTarget).find('input[name="shopping-list-entry"]').val(); 
    addShoppingItem(item);
  });
}

getFormInput();