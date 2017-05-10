



function handleForm() {


}

function createItem(userInput) {
 return {
	      list_item_name: userInput,
		  listHTML: {
	      list_open: '<li>',
		  span_shop_item: '<span class="shopping-item">' + userInput + '</span>',
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
        }
}

function assembleHTML(itemObj) {
  var htmlVals = Object.keys(itemObj.listHTML).map(function (key) {
    return itemObj[key];
  });
  return htmlVals.join("\n");
}

function addShoppingItem(userInput) {
	var itemObj = createItem(userInput);
    $('ul.shopping-list').append(assembleHTML(itemObj));
 }


function getFormInput() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var userInput = $(event.currentTarget).find('input[name="shopping-list-entry"]').val(); 
    return userInput;
  });
}





handleForm()