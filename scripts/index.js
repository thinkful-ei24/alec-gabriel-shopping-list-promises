/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  // handle this without a callback using .then as a promsie

  // const allItems = api.getItem();
  // console.log(allItems);
  api.getItems()
    .then(items=>{
      items.forEach(item => store.addItem(item));
      shoppingList.render();
  });
});
