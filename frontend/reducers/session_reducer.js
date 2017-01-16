import { RECEIVE_CURRENT_USER,
         LOGOUT,
         RECEIVE_SESSION_ERRORS,
         TOGGLE_SIGNUP_FORM,
         TOGGLE_SIGNIN_FORM
       } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: {},
  signInOpen: false,
  signUpOpen: false
});

// Merge with _nullUser instead of oldState because of issues with errors
//  array, if merging with oldState, an oldState errors array of 2 items
//  merging with an action.errors array of 1 item will merge to give a new
//  errors array of 2 items, with the first old item replaced with the first
//  action.errors item, instead of replacing the entire array.
const SessionReducer = (oldState = _nullUser, action) => {
  let newState = merge({}, oldState);
  newState.errors = {};

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      newState.currentUser = currentUser;
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
      return newState;

    case LOGOUT:
      window.localStorage.setItem("currentUser", JSON.stringify(null));
      return merge({}, _nullUser);

    case RECEIVE_SESSION_ERRORS:
      let errors = action.errors;
      window.localStorage.setItem("currentUser", JSON.stringify(null));
      return merge({}, _nullUser, { errors });

    case TOGGLE_SIGNIN_FORM:
      newState.signInOpen = !newState.signInOpen;
      return newState;

    case TOGGLE_SIGNUP_FORM:
      newState.signUpOpen = !newState.signUpOpen;
      return newState;
      
    default:
      return oldState;
  }
};

export default SessionReducer;
