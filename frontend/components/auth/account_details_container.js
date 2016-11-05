import { connect } from 'react-redux';
import AccountDetails from './account_details';
import { logout, login, signup, guestLogin }
  from '../../actions/session_actions';

// currentUser: state.session.currentUser,
// loggedIn: state.session.currentUser ? true : false,

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetails);
