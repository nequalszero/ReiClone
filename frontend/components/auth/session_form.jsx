import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    console.log("SessionForm props: ", props);
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
    console.log("this.state:", this.state);
    // console.log("user:", user);
    // console.log("{user}:", {user});
    return this.props.formAction({user});
  }

  // componentDidUpdate() {
  //   this.redirectIfLoggedIn();
  // }
  //
  // redirectIfLoggedIn() {
  //   if (this.props.loggedIn) {
  //     this.props.router.push("/");
  //   }
  // }

  renderErrors() {
    //console.log("renderErrors props:", this.props);
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

  renderNewSessionForm(buttonText, className){
    //
    return (
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
    );
  }

  render() {
    let buttonText = this.props.formType === 'login' ? "Login"
                                                     : "Create Account";
    let className = this.props.className;

    return(
      <form className={className}>
        {this.renderNewSessionForm(buttonText, className)}
      </form>
    );
  }
}

export default SessionForm;
