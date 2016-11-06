import { connect } from 'react-redux';
import GuestLogin from './guest_login';
import { guestLogin } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
    guestLogin: () => dispatch(guestLogin())
});

export default connect(
  null,
  mapDispatchToProps
)(GuestLogin);
