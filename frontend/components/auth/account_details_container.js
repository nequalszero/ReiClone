import { connect } from 'react-redux';
import AccountDetails from './account_details';
import { logout }
  from '../../actions/session_actions';
import { saveCartItem } from '../../actions/shopping_cart_actions';

// currentUser: state.session.currentUser,
// loggedIn: state.session.currentUser ? true : false,

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  shopping_cart: state.shopping_cart
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  saveCartItem: (item) => dispatch(saveCartItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDetails);
