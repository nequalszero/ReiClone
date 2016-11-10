import { connect } from 'react-redux';
import GuestLogin from './guest_login';
import { guestLogin } from '../../actions/session_actions';
import { requestUserItems } from '../../actions/shopping_cart_actions';

const mapDispatchToProps = dispatch => ({
    guestLogin: () => dispatch(guestLogin()),
    requestUserItems: () => dispatch(requestUserItems())
});

export default connect(
  null,
  mapDispatchToProps
)(GuestLogin);
