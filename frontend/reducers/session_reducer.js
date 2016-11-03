import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS }
    from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

// Merge with _nullUser instead of oldState because of issues with errors
//  array, if merging with oldState, an oldState errors array of 2 items
//  merging with an action.errors array of 1 item will merge to give a new
//  errors array of 2 items, with the first old item replaced with the first
//  action.errors item, instead of replacing the entire array.
const SessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, _nullUser, { currentUser });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, _nullUser, { errors });
    default:
      return oldState;
  }
};

export default SessionReducer;
