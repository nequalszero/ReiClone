import React from 'react';
import SessionFormContainer from './session_form_container';
import AccountDetailsContainer from './account_details_container';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  hideFormDropDown(targetClass) {
    let targetForm = document.getElementsByClassName(targetClass);
    if (targetForm.length !== 1){
      let num = targetForm.length;
      console.log(`Error in hideFormDropDown: ${num} elements found.` +
                  `for class ${targetClass}`);
    } else {
      targetForm = targetForm[0];
      targetForm.style.display = targetForm.style.display || "none";
    }
  }

  toggleFormDropDown(targetClass) {
    return (e) => {
      let targetForm = document.getElementsByClassName(targetClass);
      if (targetForm.length !== 1){
        let num = targetForm.length;
        console.log(`Error in toggleFormDropDown: ${num} elements found` +
                    `for class ${targetClass}`);
      } else {
        targetForm = targetForm[0];
        targetForm.style.display = targetForm.style.display === "none"
                                    ? "block" : "none";
      }
    };
  }

  hideLoginAndSignupContainers() {
    this.hideFormDropDown("authFormDropDown-login");
    this.hideFormDropDown("authFormDropDown-signup");
  }

  componentDidMount() {
    this.hideLoginAndSignupContainers();
  }

  componentDidUpdate() {
    this.hideLoginAndSignupContainers();

    let accountClass = "account-details-dropdown";
    let accountContainer = document.getElementsByClassName(accountClass)[0];
    let signupLink = document.getElementsByClassName("sign-up")[0];
    signupLink.style.display = "block";

    if (accountContainer) {
      accountContainer.style.display = "block";
      signupLink.style.display = "none";
    }
  }

  sessionLinks(status){
    let loginClassName = "authFormDropDown-login";
    let signupClassName = "authFormDropDown-signup";
    let accountDetailsClass = "account-details-dropdown";

    if (status === "logged_out") {
      return(
        <nav className="header-auth">
          <li className="sign-up"
            onClick={this.toggleFormDropDown(signupClassName)}>SIGN UP</li>
          <SessionFormContainer formType="signup"
                                className={signupClassName}/>

          <li className="sign-in"
            onClick={this.toggleFormDropDown(loginClassName)}>SIGN IN</li>
          <SessionFormContainer formType="login"
                                className={loginClassName}/>
          <li>CART</li>
        </nav>
      );
    } else {

      return(
        <nav className="header-auth">
            <li className="sign-up"
              onClick={this.toggleFormDropDown(signupClassName)}>SIGN UP</li>
            <SessionFormContainer formType="signup"
                                  className={signupClassName}/>
            <li className="my-account"
                onClick={this.toggleFormDropDown(accountDetailsClass)}>
                MY ACCOUNT</li>
              <AccountDetailsContainer className={accountDetailsClass}/>
              <li>CART</li>
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
