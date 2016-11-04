import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;

function hideFormDropDown(targetClass) {
  let targetForm = document.getElementsByClassName(targetClass);
  if (targetForm.length !== 1){
    let num = targetForm.length;
    console.log(`Error in hideFormDropDown: ${num} elements found.`);
  } else {
    targetForm = targetForm[0];
    targetForm.style.display = targetForm.style.display || "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
  hideFormDropDown("authFormDropDown-login");
  hideFormDropDown("authFormDropDown-signup");
});
