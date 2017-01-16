export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const GUEST_LOGIN = "GUEST_LOGIN";
export const TOGGLE_SIGNUP_FORM = "TOGGLE_SIGNUP_FORM";
export const TOGGLE_SIGNIN_FORM = "TOGGLE_SIGNIN_FORM";

export const signup = user => ({
  type: SIGNUP,
  user
});

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

export const guestLogin = () => ({
  type: GUEST_LOGIN,
  user: {user: {username: 'Guest', password: 'asdfasdf'}}
});

export const toggleSignupForm = () => ({
  type: TOGGLE_SIGNUP_FORM
});

export const toggleSigninForm = () => ({
  type: TOGGLE_SIGNIN_FORM
});
