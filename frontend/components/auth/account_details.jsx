import React from 'react';

class AccountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.submitSessionForm = this.submitSessionForm.bind(this);
  }

  submitSessionForm(e) {
    e.preventDefault();
    let items = this.props.shopping_cart.items;
    if (items !== []) {
      items.forEach(item => this.props.saveCartItem(item));
    }
    return this.props.logout();
  }

  renderMyAccountForm(buttonText, username) {
    return(
      <div className="account-details-container">
        <label>Hello {username}</label>
        <br/><br/>
        <button onClick={this.submitSessionForm}>{buttonText}</button>
      </div>
    );
  }

  render() {
    let className = this.props.className;
    let username = this.props.currentUser.username;
    let buttonText = "Sign out";

    return(
      <li>
        <form className={className}>
          {this.renderMyAccountForm(buttonText, username)}
        </form>
      </li>
    );
  }
}

export default AccountDetails;
