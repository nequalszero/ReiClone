import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener("click", (event) => {
  let eventPath = event.path.map((el) => el.className);

  let loginText = "sign-in";
  let signupText = "sign-up";
  let accountText = "my-account";

  let loginFormClass = "authFormDropDown-login";
  let signupFormClass = "authFormDropDown-signup";
  let accountDetailsClass = "account-details-dropdown";

  let loginForm = document.getElementsByClassName(loginFormClass)[0];
  let signupForm = document.getElementsByClassName(signupFormClass)[0];
  let myAccountForm = document.getElementsByClassName(accountDetailsClass)[0];

  let dropDowns = [
    {liClass: loginFormClass, form: loginForm, text: loginText},
    {liClass: signupFormClass, form: signupForm, text: signupText},
    {liClass: accountDetailsClass, form: myAccountForm, text: accountText}
  ];

  dropDowns.forEach(({liClass, form, text}) => {
    if (form) {
      if (form.style.display === "block" && eventPath[0] !== text) {
        if (!eventPath.includes(liClass)) {
          form.style.display = "none";
        }
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
