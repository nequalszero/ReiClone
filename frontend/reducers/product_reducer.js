import { RECEIVE_ITEMS,
         RECEIVE_ERRORS,
         RECEIVE_CATEGORIES
       } from '../actions/product_actions';
import merge from 'lodash/merge';

const _defaultProduct = Object.freeze({
  items: null,
  errors: [],
  categories: []
});

const ProductReducer = (oldState = _defaultProduct, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  newState.errors = [];

  switch(action.type) {
    case RECEIVE_ITEMS:
      let items = action.items;
      return merge(newState, { items });
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge(newState, { errors });
    case RECEIVE_CATEGORIES:
      let categories = action.categories;
      return merge(newState, { categories });
    default:
      return oldState;
  }
};

export default ProductReducer;
