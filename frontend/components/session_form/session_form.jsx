import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.submitSessionForm = this.submitSessionForm.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  updateField(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  submitSessionForm(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let buttonText = this.props.formType === 'login'
                     ? "Login" : "Create Account";
    return(
      <form>
        <div className="login-form-container">
          { this.renderErrors() }
          <div className="login-form">
            <label>Username</label>
            <br/>
            <input onChange={this.updateField('username')}
                   value={this.state.username}
                   className="login-input"/>
            <br/>
            <label>Password</label>
            <br/>
            <input onChange={this.updateField('password')}
                   value={this.state.password}
                   className="login-input"/>
            <br/>
            <button onClick={this.submitSessionForm}>{buttonText}</button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(SessionForm);
