import { connect } from 'react-redux';
import AccountDetails from './account_details';
import { logout }
  from '../../actions/session_actions';
import { } from '../../actions/shopping_cart_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  shopping_cart: state.shopping_cart
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetails);
