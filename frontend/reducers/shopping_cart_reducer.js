import { RECEIVE_USER_ITEMS,
         REMOVE_ITEM_FROM_CART,
         RECEIVE_ERRORS,
         ADD_ITEM_TO_CART,
         UPDATE_QUANTITY,
         EMPTY_CART_ON_LOGOUT
       } from '../actions/shopping_cart_actions';

import merge from 'lodash/merge';

const _defaultShoppingCart = Object.freeze({
  items: [],
  errors: []
});

const removeItemHelper = (currentItems, itemToDelete) => {
  let newItems = [];
  currentItems.forEach(item => {
    if (item.product_id !== itemToDelete.product_id) newItems.push(item);
  });
  return newItems;
};

const updateQuantityHelper = (currentItems, updatedItem) => {
  let newItems = [];
  currentItems.forEach(item => {
    if (item.product_id === updatedItem.product_id) {
      newItems.push(updatedItem);
    } else {
      newItems.push(item);
    }
  });
  return newItems;
};

const ShoppingCartReducer = (oldState = _defaultShoppingCart, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  newState.errors = [];

  switch(action.type) {
    case RECEIVE_USER_ITEMS:
      action.items.forEach((item) => newState.items.push(item));
      return newState;

    case ADD_ITEM_TO_CART:
      let item = action.item;
      if (!item.redirect_create) {
        newState.items.push(action.item);
      }
      return newState;

    case RECEIVE_ERRORS:
      // console.log("receiving errors");
      newState.errors = action.errors;
      return newState;

    case REMOVE_ITEM_FROM_CART:
      newState.items = removeItemHelper(newState.items, action.item);
      return newState;

    case UPDATE_QUANTITY:
      let newItem = action.item;
      if (newItem.redirect_create) delete newItem["redirect_create"];
      newState.items = updateQuantityHelper(newState.items, newItem);
      return newState;

    case EMPTY_CART_ON_LOGOUT:
      newState.items = [];
      return newState;

    default:
      return oldState;
  }
};

export default ShoppingCartReducer;
