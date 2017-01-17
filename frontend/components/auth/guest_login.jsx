import React from 'react';

class GuestLogin extends React.Component {
  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin() {
    this.props.guestLogin();
  }

  render() {
    return (
      <li className="visible-li guest-login"
          onClick={this.guestLogin}>
          GUEST LOGIN <i className="fa fa-user-circle fa-lg fa-inverse"
                         aria-hidden="true"></i>
        </li>
    );
  }
}

export default GuestLogin;
