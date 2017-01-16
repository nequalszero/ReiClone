export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const REQUEST_USER_ITEMS = "REQUEST_USER_ITEMS";
export const RECEIVE_USER_ITEMS = "RECEIVE_USER_ITEMS";
export const RECEIVE_SC_ERRORS = "RECEIVE_SC_ERRORS";
export const SAVE_CART_ITEM_TO_DATABASE = "SAVE_CART_ITEM_TO_DATABASE";
export const REMOVE_USER_ITEM_FROM_DATABASE = "REMOVE_USER_ITEM_FROM_DATABASE";
export const UPDATE_QUANTITY_IN_DATABASE = "UPDATE_QUANTITY_IN_DATABASE";
export const EMPTY_CART_ON_LOGOUT = "EMPTY_CART_ON_LOGOUT";

export const addItemToCart = item => ({
  type: "ADD_ITEM_TO_CART",
  item
});

export const removeItemFromCart = item => ({
  type: "REMOVE_ITEM_FROM_CART",
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

export const receiveSCErrors = ( {errors} ) => {
  // console.log("receiveErrors errors", errors);
  return {
    type: "RECEIVE_SC_ERRORS",
    errors
  };
};

export const saveCartItemToDatabase = item => ({
  type: "SAVE_CART_ITEM_TO_DATABASE",
  item
});

export const removeUserItemFromDatabase = (item) => {
  return {
    type: "REMOVE_USER_ITEM_FROM_DATABASE",
    item: item
  };
};

export const updateQuantityInDatabase = (item) => ({
  type: "UPDATE_QUANTITY_IN_DATABASE",
  item
});

export const emptyCartOnLogout = () => ({
  type: "EMPTY_CART_ON_LOGOUT"
});
