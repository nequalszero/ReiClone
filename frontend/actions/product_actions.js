export const REQUEST_ITEM = "REQUEST_ITEM";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const requestItem = id => ({
  type: REQUEST_ITEM,
  id
});

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
