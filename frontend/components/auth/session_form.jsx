import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    // console.log("SessionForm props: ", props);
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.submitSessionForm = this.submitSessionForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  updateField(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  submitSessionForm(e) {
    e.preventDefault();
    const user = this.state;
    return this.props.formAction({user});
  }

  renderErrors() {
    // console.log("renderErrors props:", this.props);
    if (this.props.errors) {
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
  }

  renderNewSessionForm(buttonText, className){
    //
    return (
      <div className="login-form-container">
        { this.renderErrors() }
        <div className="login-form">
          <label>Username<br/>
            <input onChange={this.updateField('username')}
                   value={this.state.username}
                   className="login-input"/>
          </label>

          <br/>

          <label>Password<br/>
            <input onChange={this.updateField('password')}
                   value={this.state.password}
                   className="login-input"/>
          </label>
          <br/>

          <button onClick={this.submitSessionForm}>{buttonText}</button>
        </div>
      </div>
    );
  }

  render() {
    let buttonText = this.props.formType === 'login' ? "Login"
                                                     : "Create Account";
    let className = this.props.className;

    return(
      <li>
        <form className={className}>
          {this.renderNewSessionForm(buttonText, className)}
        </form>
      </li>
    );
  }
}

export default SessionForm;
