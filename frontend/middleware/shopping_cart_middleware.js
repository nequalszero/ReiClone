import { REQUEST_USER_ITEMS,
         REMOVE_USER_ITEMS_FROM_DATABASE,
         SAVE_CART_ITEM,
         RECEIVE_USER_ITEMS,
         removeItem,
         receiveUserItems,
         receiveErrors,
         removeUserItemsFromDatabase }
    from '../actions/shopping_cart_actions';
import { fetchUserItems,
         createItem,
         deleteUserItems
        } from '../util/shopping_cart_api_util';

const ShoppingCartMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallback = xhr => {
    console.log("errorCallback xhr", xhr);
    return dispatch(receiveErrors(xhr.responseJSON));
  };


  switch(action.type) {
    case REQUEST_USER_ITEMS:
      const requestUserItemsSuccessCallback = items => dispatch(receiveUserItems(items));
      fetchUserItems(requestUserItemsSuccessCallback, errorCallback);
      return next(action);
    case RECEIVE_USER_ITEMS:
      const receiveUserItemsSuccessCallback = () => dispatch(removeUserItemsFromDatabase());
      deleteUserItems(receiveUserItemsSuccessCallback, errorCallback);
      return next(action);
    // case REMOVE_USER_ITEMS_FROM_DATABASE:
    //   const deleteSuccessCallback = message => console.log(message);
    //   deleteUserItems(deleteSuccessCallback, errorCallback);
    //   return next(action);
    case SAVE_CART_ITEM:
      let saveCartSuccessCallback = (item) => dispatch(removeItem(item));
      createItem(action.item, saveCartSuccessCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default ShoppingCartMiddleware;
