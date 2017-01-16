import { REQUEST_CATEGORY_ITEMS,
         REQUEST_CATEGORIES,
         receiveCategories,
         receiveItems,
         receiveResultsErrors }
    from '../actions/results_actions';
import { SEARCH, receiveSearchResults } from '../actions/search_actions';
import { fetchCategoryItems,
         fetchCategories
       } from '../util/results_api_util';
import { search } from '../util/search_api_util';

const ResultsMiddleware = ({ getState, dispatch }) => next => action => {
  let successCallback;
  const errorCallback = xhr => dispatch(receiveResultsErrors(xhr.responseJSON));

  switch(action.type) {
    case REQUEST_CATEGORY_ITEMS:
      successCallback = items => dispatch(receiveItems(items));
      fetchCategoryItems(action.categoryId, successCallback, errorCallback);
      return next(action);

    case REQUEST_CATEGORIES:
      successCallback = categories => {
        return dispatch(receiveCategories(categories));
      };
      fetchCategories(successCallback, errorCallback);
      return next(action);

    case SEARCH:
      successCallback = data => dispatch(receiveSearchResults(data));
      search(action.keywords, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default ResultsMiddleware;
