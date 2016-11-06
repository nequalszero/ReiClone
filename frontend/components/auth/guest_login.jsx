import React from 'react';

class GuestLogin extends React.Component {
  constructor(props) {
    super(props);
    this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin() {
    return this.props.guestLogin();
  }

  render() {
    return (
      <li className="guest-login"
          onClick={this.guestLogin}>GUEST LOGIN</li>
    );
  }
}

export default GuestLogin;
