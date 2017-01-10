export const EMPTY_LOCAL_CART = "EMPTY_LOCAL_CART";
export const ADD_ITEM_TO_LOCAL_CART = "ADD_ITEM_TO_LOCAL_CART";
export const UPDATE_ITEM_IN_LOCAL_CART = "UPDATE_ITEM_IN_LOCAL_CART";
export const DELETE_ITEM_IN_LOCAL_CART = "DELETE_ITEM_IN_LOCAL_CART";
export const TRIGGER_MERGE_STATE = "TRIGGER_MERGE_STATE";

export const emptyLocalCart = () => ({
  type: EMPTY_LOCAL_CART
});

export const addItemInLocalCart = item => ({
  type: ADD_ITEM_TO_LOCAL_CART,
  item
});

export const updateItemInLocalCart = item => ({
  type: UPDATE_ITEM_IN_LOCAL_CART,
  item
});

export const deleteItemInLocalCart = item => ({
  type: DELETE_ITEM_IN_LOCAL_CART,
  item
});

export const triggerMergeState = count => ({
  type: TRIGGER_MERGE_STATE,
  count
});
