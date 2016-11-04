import { connect } from 'react-redux';
import SessionForm from './session_form';
import { logout, login, signup, guestLogin }
  from '../../actions/session_actions';

// currentUser: state.session.currentUser,
// loggedIn: state.session.currentUser ? true : false,

const mapStateToProps = state => ({
  errors: state.session.errors,
});

const mapDispatchToProps = (dispatch, {formType, className}) => ({
    formAction: formType === 'login' ? (user) => dispatch(login(user))
                                     : (user) => dispatch(signup(user)),
    formType,
    className
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
