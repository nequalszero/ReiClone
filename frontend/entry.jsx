import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import Modal from 'react-modal';

// window.error = (message) => console.log(message);
// window.success = (message) => console.log("Success", message);

// import { signup, login, logout}
//     from './util/session_api_util';
// window.signup = signup;
// window.login = login;
// window.logout = logout;

// import { createReview, updateReview, fetchReviews, deleteReview }
//     from './util/reviews_api_util';
//
// window.createReview = createReview;
// window.updateReview = updateReview;
// window.fetchReviews = fetchReviews;
// window.deleteReview = deleteReview;

// import { createReview, updateReview, requestReviews, deleteReview }
//     from './actions/reviews_actions';

// window.createReview = createReview;
// window.updateReview = updateReview;
// window.requestReviews = requestReviews;
// window.deleteReview = deleteReview;

document.addEventListener("click", (event) => {
  let eventPath = event.path.map((el) => el.className);

  let loginText = "visible-li sign-in";
  let signupText = "visible-li sign-up";
  let accountText = "visible-li my-account";

  let loginFormClass = "authFormDropDown-login";
  let signupFormClass = "authFormDropDown-signup";
  let accountDetailsClass = "account-details-dropdown";

  let loginForm = document.getElementsByClassName(loginFormClass)[0];
  let signupForm = document.getElementsByClassName(signupFormClass)[0];
  let myAccountForm = document.getElementsByClassName(accountDetailsClass)[0];

  let loginLink = document.getElementsByClassName(loginText)[0];
  let signupLink = document.getElementsByClassName(signupText)[0];
  let myAccountLink = document.getElementsByClassName(accountText)[0];

  let dropDowns = [
    {
      liClass: loginFormClass, form: loginForm,
      text: loginText, link: loginLink
    },
    {
      liClass: signupFormClass, form: signupForm,
      text: signupText, link: signupLink
    },
    {
      liClass: accountDetailsClass, form: myAccountForm,
      text: accountText, link: myAccountLink
    }
  ];

  dropDowns.forEach(({liClass, form, text, link}) => {
    if (form) {
      if (form.style.display === "block" && eventPath[0] !== text) {
        if (!eventPath.includes(liClass)) {
          form.style.display = "none";
          let listEl = document.getElementsByClassName(text)[0];
        }
      }
    }
    if (link) {
      if (eventPath[0] !== text && link.style.color !== "white") {
        link.style.color = "white";
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // window.store = store;
  Modal.setAppElement(document.body);
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
