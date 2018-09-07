const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/richie';

  const getItems = function(callback) {
    //remove the callback here
    $.getJSON(BASE_URL + '/items', callback);
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({ name });
    return $.ajax({
      url: BASE_URL + '/items',
      method: 'POST',
      contentType: 'application/json',
      data: newItem
      // success: onSuccess,
      // error: onError
    });
  };

  const updateItem = function(id, updateData) {
    return $.ajax({
      url: BASE_URL + '/items/' + id,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData)
    });
  };

  const deleteItem = function(id, callback) {
    $.ajax({
      url: BASE_URL + '/items/' + id,
      method: 'DELETE',
      success: callback
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})();
