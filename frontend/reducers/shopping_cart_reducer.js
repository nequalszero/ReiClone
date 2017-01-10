import { RECEIVE_USER_ITEMS,
         REMOVE_ITEM_FROM_CART,
         RECEIVE_ERRORS,
         ADD_ITEM_TO_CART,
         UPDATE_QUANTITY,
         EMPTY_CART_ON_LOGOUT
       } from '../actions/shopping_cart_actions';
import { EMPTY_LOCAL_CART,
         ADD_ITEM_TO_LOCAL_CART,
         UPDATE_ITEM_IN_LOCAL_CART,
         DELETE_ITEM_IN_LOCAL_CART,
         TRIGGER_MERGE_STATE
       } from '../actions/local_shopping_cart_actions';
import { saveItemToLocalStorage,
         deleteItemFromLocalStorage,
         updateQuantityInLocalStorage,
         emptyLocalStorageItems,
         removeItemHelper,
         updateQuantityHelper,
         pushOrUpdateLocal
       } from './shopping_cart_helper';

import merge from 'lodash/merge';

const configureLocalStore = () => {
  if (!window.localStorage.items) {
    window.localStorage.setItem("items", JSON.stringify([]));
  }
  return JSON.parse(window.localStorage.items);
};

const _defaultShoppingCart = Object.freeze({
  items: [],
  errors: [],
  localItems: configureLocalStore(),
  merging: false,
  mergeCountRemaining: 0
});

const validateLocal = (newState) => {
  if (newState.mergeCountRemaining <= 0) {
    throw "ERROR ShoppingCartReducer#validateLocal: " +
          "item.local = true but newState.mergeCountRemaining <= 0 ";
  } else if (newState.merging === false) {
    throw "ERROR ShoppingCartReducer#validateLocal: " +
          "item.local = true but newState.merging is false ";
  }
};

// Handling item that has come from localStorage.items
const processLocal = (newState) => {
  validateLocal(newState);
  newState.mergeCountRemaining -= 1;
  if (newState.mergeCountRemaining === 0)
    newState.merging = false;
};

const ShoppingCartReducer = (oldState = _defaultShoppingCart, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  newState.errors = [];
  let item;

  switch(action.type) {
    case RECEIVE_USER_ITEMS:
      action.items.forEach(itm => newState.items.push(itm));
      return newState;

    case ADD_ITEM_TO_CART:
      item = action.item;
      if (!item.redirect_create) {
        if (item.local) processLocal(newState);
        newState.items = [action.item, ...newState.items];
      }
      return newState;

    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;

    case REMOVE_ITEM_FROM_CART:
      newState.items = removeItemHelper(newState.items, action.item);
      return newState;

    case UPDATE_QUANTITY:
      let newItem = action.item;
      if (newItem.redirect_create) delete newItem["redirect_create"];
      if (newItem.local) processLocal(newState);
      newState.items = updateQuantityHelper(newState.items, newItem);
      return newState;

    case EMPTY_CART_ON_LOGOUT:
      newState.items = [];
      return newState;

    case EMPTY_LOCAL_CART:
      newState.localItems = [];
      emptyLocalStorageItems();
      return newState;

    case ADD_ITEM_TO_LOCAL_CART:
      newState.localItems = pushOrUpdateLocal(newState.localItems, action.item);
      saveItemToLocalStorage(action.item);
      return newState;

    case UPDATE_ITEM_IN_LOCAL_CART:
      item = action.item;
      newState.localItems = updateQuantityHelper(newState.localItems, item);
      updateQuantityInLocalStorage(item);
      return newState;

    case DELETE_ITEM_IN_LOCAL_CART:
      item = action.item;
      newState.localItems = removeItemHelper(newState.localItems, item);
      deleteItemFromLocalStorage(item);
      return newState;

    case TRIGGER_MERGE_STATE:
      newState.merging = true;
      newState.mergeCountRemaining = action.count;
      return newState;

    default:
      return oldState;
  }
};

export default ShoppingCartReducer;
