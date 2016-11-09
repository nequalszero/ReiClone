import { RECEIVE_ITEM,
         RECEIVE_ERRORS
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
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge(newState, { errors });
    default:
      return oldState;
  }
};

export default ResultsReducer;
