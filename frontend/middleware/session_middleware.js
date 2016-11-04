import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP,
         GUEST_LOGIN
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

// Deconstruct state (via getState) and dispatch from store
const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  // xhr = xml http response, responseJson is the key where our json is stored
  //   when the ajax request fails and returns an error object.
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case GUEST_LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
