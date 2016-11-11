import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP,
         GUEST_LOGIN,
         RECEIVE_CURRENT_USER
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

import { requestUserItems,
         emptyCartOnLogout
       } from '../actions/shopping_cart_actions';

// Deconstruct state (via getState) and dispatch from store
const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const loginSuccessCallback = user => {
    dispatch(receiveCurrentUser(user));
    dispatch(requestUserItems());
  };
  const receiveUserCallback = () => dispatch(requestUserItems());
  const logoutSuccessCallback = () => dispatch(emptyCartOnLogout());

  // xhr = xml http response, responseJson is the key where our json is stored
  //   when the ajax request fails and returns an error object.
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));



  switch(action.type) {
    case LOGIN:
      login(action.user, loginSuccessCallback, errorCallback);
      return next(action);

    case LOGOUT:
      logout(logoutSuccessCallback, errorCallback);
      return next(action);

    case SIGNUP:
      signup(action.user, loginSuccessCallback, errorCallback);
      return next(action);

    case GUEST_LOGIN:
      login(action.user, loginSuccessCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default SessionMiddleware;
