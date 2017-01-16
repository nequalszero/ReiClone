export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const REQUEST_CATEGORY_ITEMS = "REQUEST_CATEGORY_ITEMS";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_RESULTS_ERRORS = "RECEIVE_RESULTS_ERRORS";
export const CLEAR_RESULTS_FROM_STATE = "CLEAR_RESULTS_FROM_STATE";

export const requestCategories = () => ({
  type: REQUEST_CATEGORIES
});

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const requestCategoryItems = categoryId => ({
  type: REQUEST_CATEGORY_ITEMS,
  categoryId
});

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const receiveResultsErrors = errors => ({
  type: RECEIVE_RESULTS_ERRORS,
  errors: errors
});

export const clearResultsFromState = errors => ({
  type: CLEAR_RESULTS_FROM_STATE,
  errors: errors
});
