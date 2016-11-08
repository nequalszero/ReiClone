export const REQUEST_CATEGORIES = "REQUEST_CATEGORIES";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const REQUEST_CATEGORY_ITEMS = "REQUEST_CATEGORY_ITEMS";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

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

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors
});
