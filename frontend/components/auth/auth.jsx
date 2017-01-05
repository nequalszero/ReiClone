import React from 'react';
import SessionFormContainer from './session_form_container';
import AccountDetailsContainer from './account_details_container';
import GuestLoginContainer from './guest_login_container';
import ShoppingCartContainer from '../shopping_cart/shopping_cart_container';
import { lightGreen } from '../helper_functions/misc_elements';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleFormDropDown(targetClass, parentLink) {
    let targetForm = document.getElementsByClassName(targetClass);
    if (targetForm.length !== 1){
      let num = targetForm.length;
      // console.log(`Error in toggleFormDropDown: ${num} elements found` +
      //             `for class ${targetClass}`);
      } else {
        targetForm = targetForm[0];
        let listEl = document.getElementsByClassName(parentLink)[0];
        listEl.style.color = lightGreen;
        if (targetForm.style.display === "none") {
          targetForm.style.display = "block";
        } else if (targetForm.style.display === "block") {
          targetForm.style.display = "none";
        }
        // targetForm.style.display = targetForm.style.display === "none"
        // ? "block" : "none";
      }

    }

  hideFormDropDown(targetClass) {
    let targetForm = document.getElementsByClassName(targetClass);
    if (targetForm.length !== 1){
      let num = targetForm.length;
      // console.log(`Error in hideFormDropDown: ${num} elements found.` +
      //             `for class ${targetClass}`);
    } else {
      targetForm = targetForm[0];
      targetForm.style.display = "none";
    }
  }

  hideLoginAndSignupContainers() {
    this.hideFormDropDown("authFormDropDown-login");
    this.hideFormDropDown("authFormDropDown-signup");
  }

  componentDidMount() {
    // console.log("auth.jsx component did mount");
    this.hideLoginAndSignupContainers();
    if (this.props.currentUser) {
      this.props.requestUserItems();
      let accountClass = "account-details-dropdown";
      let signupLink = document.getElementsByClassName("sign-up")[0];
      let guestLoginLink = document.getElementsByClassName("guest-login")[0];
      let accountContainer = document.getElementsByClassName(accountClass)[0];
      signupLink.style.display = "none";
      guestLoginLink.style.display = "none";
      accountContainer.style.display = "none";
    }
  }

  componentDidUpdate() {
    // console.log("auth.jsx component did update");

    if (this.props.errors){
      if (!this.props.errors.login && !this.props.errors.signup) {
        this.hideLoginAndSignupContainers();
      }
    }

    let accountClass = "account-details-dropdown";
    let accountContainer = document.getElementsByClassName(accountClass)[0];
    let signupLink = document.getElementsByClassName("sign-up")[0];
    let guestLoginLink = document.getElementsByClassName("guest-login")[0];
    let signinLink = document.getElementsByClassName("sign-in")[0];
    signupLink.style.display = "block";
    guestLoginLink.style.display = "block";
    // signupLink.style.color = "white";
    // if (signinLink) signinLink.style.color = "white";

    if (accountContainer) {
      // console.log("AC display status:", accountContainer.style.display);
      let ACStatus = accountContainer.style.display;
      let accountLink = document.getElementsByClassName("my-account")[0];
      accountLink.style.color = "white";

      switch(ACStatus) {
        case "":
          accountContainer.style.display = "block";
          accountLink.style.color = lightGreen;
          break;
        case "block":
          accountContainer.style.display = "block";
          accountLink.style.color = lightGreen;
          break;
        default:
          accountContainer.style.display = "none";
          break;
      }
      signupLink.style.display = "none";
      guestLoginLink.style.display = "none";
    }
    //
    // if (this.props.loggedIn) {this.props.requestUserItems();}
  }

  sessionLinks(status){
    let loginClassName = "authFormDropDown-login";
    let signupClassName = "authFormDropDown-signup";
    let accountDetailsClass = "account-details-dropdown";

    if (status === "logged_out") {
      return(
        <nav className="header-auth">
          <GuestLoginContainer />
          <li className="visible-li sign-up"
              onClick={() => this.toggleFormDropDown(signupClassName,
                                               "visible-li sign-up")}>
              SIGN UP <i className="fa fa-user-plus fa-lg"
                         aria-hidden="true"></i>
          </li>
            <SessionFormContainer formType="signup"
                                  className={signupClassName}/>

          <li className="visible-li sign-in"
              onClick={() => this.toggleFormDropDown(loginClassName,
                                               "visible-li sign-in")}>
              SIGN IN <i className="fa fa-user-circle fa-lg"
                         aria-hidden="true"></i>
          </li>
                <SessionFormContainer formType="login"
                                      className={loginClassName}/>
                <ShoppingCartContainer />
        </nav>
      );
    } else {

      return(
        <nav className="header-auth">
            <GuestLoginContainer />
            <li className="visible-li sign-up"
                onClick={() => this.toggleFormDropDown(signupClassName,
                                                 "visible-li sign-up")}>
              SIGN UP
            </li>
              <SessionFormContainer formType="signup"
                                    className={signupClassName}/>
            <li className="visible-li my-account"
                onClick={() => this.toggleFormDropDown(accountDetailsClass,
                                                 "visible-li my-account")}>
                MY ACCOUNT <i className="fa fa-user-circle-o fa-lg"
                              aria-hidden="true"></i>
            </li>
            <AccountDetailsContainer className={accountDetailsClass}/>
            <ShoppingCartContainer />
        </nav>
      );
    }
  }


  render() {
    let currentUser = this.props.currentUser;
    return currentUser ? this.sessionLinks("logged_in")
                       : this.sessionLinks("logged_out");
  }

}

export default Auth;
