import React from 'react';
import SessionFormContainer from './session_form_container';
import AccountDetailsContainer from './account_details_container';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleFormDropDown(targetClass) {
    return (e) => {
      console.log("clicking container");
      let targetForm = document.getElementsByClassName(targetClass);
      if (targetForm.length !== 1){
        let num = targetForm.length;
        console.log(`Error in toggleFormDropDown: ${num} elements found.`);
      } else {
        targetForm = targetForm[0];
        targetForm.style.display = targetForm.style.display === "none"
                                    ? "block" : "none";
      }
    };
  }

  sessionLinks(){
    let loginClassName = "authFormDropDown-login";
    let signupClassName = "authFormDropDown-signup";
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
  }

  loggedInHeader() {
    let accountDetailsClass = "account-details-dropdown";
    return (
      <nav className="header-auth">
        <li className="placeholder-li"></li>
        <li className="my-account"
            onClick={this.toggleFormDropDown(accountDetailsClass)}>
            My Account</li>
          <AccountDetailsContainer className="account-details-dropdown"/>

        <li>CART</li>
      </nav>
    );
  }

  render() {
    let currentUser = this.props.currentUser;
    return currentUser ? this.loggedInHeader() : this.sessionLinks();
  }

}

export default Auth;
