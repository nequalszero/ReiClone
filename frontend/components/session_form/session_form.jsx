import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.submitSessionForm = this.submitSessionForm.bind(this);
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

  render() {
    let buttonText = this.props.formType === 'login'
                     ? "Login" : "Create Account";
    return(
      <form>
        <label>Username</label>
        <br></br>
        <input onChange={this.updateField('username')}
               value={this.state.username}/>
        <br></br>
        <label>Password</label>
        <br></br>
        <input onChange={this.updateField('password')}
               value={this.state.password}/>
        <br></br>
        <button onClick={this.submitSessionForm}>{buttonText}</button>
      </form>
    );
  }
}

export default SessionForm;
