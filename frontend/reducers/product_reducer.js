import { RECEIVE_ITEM,
         RECEIVE_PRODUCT_ERRORS,
         CLEAR_ITEM_FROM_STATE
       } from '../actions/product_actions';
import merge from 'lodash/merge';

const _defaultProduct = Object.freeze({
  item: null,
  errors: []
});

const ResultsReducer = (oldState = _defaultProduct, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  newState.errors = [];

  switch(action.type) {
    case RECEIVE_ITEM:
      let item = action.item;
      return merge(newState, { item });
    case RECEIVE_PRODUCT_ERRORS:
      let errors = action.errors;
      return merge(newState, { errors });
    case CLEAR_ITEM_FROM_STATE:
      return _defaultProduct;
    default:
      return oldState;
  }
};

export default ResultsReducer;
