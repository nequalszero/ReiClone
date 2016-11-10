export const fetchUserItems = (success, error) => (
  $.ajax({
    url: 'api/shopping_cart_items',
    type: 'GET',
    success,
    error
  })
);

// export const fetchItem = (itemId, success, error) => (
//   $.ajax({
//     url: `api/shopping_cart_items/${itemId}`,
//     type: 'GET',
//     success,
//     error
//   })
// );

export const deleteUserItems = (success, error) => (
  $.ajax({
    url: `api/shopping_cart_items/0`,
    type: 'DELETE',
    success,
    error
  })
);

// export const updateItemQuantity = (item, success, error) => (
//   $.ajax({
//     url: `api/shopping_cart_items/${item.id}`,
//     type: 'PATCH',
//     data: item,
//     success,
//     error
//   })
// );

export const createItem = (item, success, error) => {
  console.log("inside createItem function");
  return $.ajax({
    url: `api/shopping_cart_items`,
    type: 'POST',
    data: item,
    success,
    error
  });
};
