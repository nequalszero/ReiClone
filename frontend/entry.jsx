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

document.addEventListener("click", (event) => {
  let eventPath = event.path.map((el) => el.className);

  let loginFormClass = "authFormDropDown-login";
  let signupFormClass = "authFormDropDown-signup";
  let accountDetailsClass = "account-details-dropdown";

  let loginForm = document.getElementsByClassName(loginFormClass)[0];
  let signupForm = document.getElementsByClassName(signupFormClass)[0];
  let myAccountForm = document.getElementsByClassName(accountDetailsClass)[0];

  console.log("myAccountForm", myAccountForm);

  let dropDowns = [
    {liClass: loginFormClass, form: loginForm},
    {liClass: signupFormClass, form: signupForm},
    {liClass: accountDetailsClass, form: myAccountForm},
  ];

  dropDowns.forEach(({liClass, form}) => {
    if (form) {
      if (form.style.display === "block" && eventPath[0] !== liClass) {
        if (!eventPath.includes(liClass)) {
          form.style.display = "none";
        }
      }
    }
  });
  console.log(eventPath);
  // if (loginForm.style.display === "block" && eventPath[0] !== "sign-in") {
  //   if (!eventPath.includes(loginFormClass)) {
  //     loginForm.style.display = "none";
  //   }
  // } else if (signupForm.style.display === "block" && eventPath[0] !== "sign-up") {
  //   if (!eventPath.includes(signupFormClass)) {
  //     signupForm.style.display = "none";
  //   }
  // } else if (myAccountForm.style.display === "block" && eventPath[0] !== "my-account") {
  //   if (!eventPath.includes(accountDetailsClass)) {
  //     myAccountForm.style.display = "none";
  //   }
  // }
});

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
  hideFormDropDown("authFormDropDown-login");
  hideFormDropDown("authFormDropDown-signup");
  hideFormDropDown("account-details-dropdown");
});
