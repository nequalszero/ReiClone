import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log("dispatch", dispatch);
  // console.log("ownProps", ownProps);
  let formType = ownProps.location.pathname === '/login' ? 'login' : 'signup';
  let processFormAction = formType === 'login' ? login : signup;
  return {
    formType: formType,
    processForm: (user) => dispatch(processFormAction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
