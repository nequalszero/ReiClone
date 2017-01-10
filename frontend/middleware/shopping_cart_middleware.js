import { REQUEST_USER_ITEMS,
         SAVE_CART_ITEM_TO_DATABASE,
         REMOVE_USER_ITEM_FROM_DATABASE,
         UPDATE_QUANTITY_IN_DATABASE,
         ADD_ITEM_TO_CART,
         RECEIVE_USER_ITEMS,
         saveCartItemToDatabase,
         receiveErrors,
         receiveUserItems,
         updateQuantity,
         addItemToCart,
         removeItemFromCart
        } from '../actions/shopping_cart_actions';
import { triggerMergeState,
         emptyLocalCart
       } from '../actions/local_shopping_cart_actions';
import { fetchUserItems,
         createItem,
         deleteUserItem,
         updateItemQuantity
        } from '../util/shopping_cart_api_util';

const ShoppingCartMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCb = xhr => dispatch(receiveErrors(xhr.responseJSON));
  const requestUserItemsSuccessCb = items => dispatch(receiveUserItems(items));
  const updateSuccessCb = (item) => dispatch(updateQuantity(item));
  const saveItemSuccessCb = (item) => dispatch(addItemToCart(item));
  const removeItemSuccessCb = (item) => dispatch(removeItemFromCart(item));

  switch(action.type) {
    case REQUEST_USER_ITEMS:
      fetchUserItems(requestUserItemsSuccessCb, errorCb);
      return next(action);

    case UPDATE_QUANTITY_IN_DATABASE:
      updateItemQuantity(action.item, updateSuccessCb, errorCb);
      return next(action);

    case SAVE_CART_ITEM_TO_DATABASE:
      createItem(action.item, saveItemSuccessCb, errorCb);
      return next(action);

    case REMOVE_USER_ITEM_FROM_DATABASE:
      deleteUserItem(action.item, removeItemSuccessCb, errorCb);
      return next(action);

    case ADD_ITEM_TO_CART:
      if (action.item.redirect_create) {
        updateItemQuantity(action.item, updateSuccessCb, errorCb);
      }
      return next(action);

    case RECEIVE_USER_ITEMS:
      let localItems = JSON.parse(window.localStorage.items);
      if (localItems.length > 0) {
        dispatch(triggerMergeState(localItems.length));
        localItems.forEach((item, idx) => {
          item.local = true;
          dispatch(saveCartItemToDatabase(item));
        });
        dispatch(emptyLocalCart());
      }


    default:
      return next(action);
  }
};

export default ShoppingCartMiddleware;
