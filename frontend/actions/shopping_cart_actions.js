export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const REQUEST_USER_ITEMS = "REQUEST_USER_ITEMS";
export const RECEIVE_USER_ITEMS = "RECEIVE_USER_ITEMS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const SAVE_CART_ITEM = "SAVE_CART_ITEM";
export const REMOVE_USER_ITEMS_FROM_DATABASE = "REMOVE_USER_ITEMS_FROM_DATABASE";

export const addItemToCart = item => ({
  type: "ADD_ITEM_TO_CART",
  item
});

export const removeItem = item => ({
  type: "REMOVE_ITEM",
  item
});

export const updateQuantity = item => ({
  type: "UPDATE_QUANTITY",
  item
});

export const requestUserItems = () => ({
  type: "REQUEST_USER_ITEMS"
});

export const receiveUserItems = items => ({
  type: "RECEIVE_USER_ITEMS",
  items
});

export const receiveErrors = ( {errors} ) => {
  // console.log("receiveErrors errors", errors);
  return {
    type: "RECEIVE_ERRORS",
    errors
  };
};

export const saveCartItem = item => ({
  type: "SAVE_CART_ITEM",
  item
});

export const removeUserItemsFromDatabase = () => ({
  type: REMOVE_USER_ITEMS_FROM_DATABASE
});
