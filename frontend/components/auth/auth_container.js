import { connect } from 'react-redux';
import Auth from './auth';
import { logout, login, signup, guestLogin }
  from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  loggedIn: state.session.currentUser ? true : false,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  guestLogin: () => dispatch(guestLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
