import { REQUEST_ITEM,
         receiveItem,
         receiveProductErrors }
    from '../actions/product_actions';
import { fetchItem } from '../util/product_api_util';

const ProductMiddleware = ({ getState, dispatch }) => next => action => {
  const successCallback = item => dispatch(receiveItem(item));
  const errorCallback = xhr => dispatch(receiveProductErrors(xhr.responseJSON));

  switch(action.type) {
    case REQUEST_ITEM:
      fetchItem(action.id, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductMiddleware;
