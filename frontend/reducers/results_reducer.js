import { RECEIVE_ITEMS,
         RECEIVE_RESULTS_ERRORS,
         RECEIVE_CATEGORIES,
         CLEAR_RESULTS_FROM_STATE
       } from '../actions/results_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const _defaultResult = Object.freeze({
  items: null,
  errors: [],
  categories: [],
  keywords: null
});

const ResultsReducer = (oldState = _defaultResult, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  newState.errors = [];

  switch(action.type) {
    case RECEIVE_ITEMS:
      let items = action.items;
      newState.items = items;
      return newState;

    case RECEIVE_RESULTS_ERRORS:
      let errors = action.errors;
      return merge(newState, { errors });

    case RECEIVE_CATEGORIES:
      let categories = action.categories;
      return merge(newState, { categories });

    case CLEAR_RESULTS_FROM_STATE:
      newState.items = [];
      newState.keywords = null;
      return newState;

    case RECEIVE_SEARCH_RESULTS:
      newState.items = action.results;
      newState.keywords = action.keywords;
      return newState;

    default:
      return oldState;
  }
};

export default ResultsReducer;
