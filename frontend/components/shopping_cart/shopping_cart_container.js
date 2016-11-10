import {connect} from 'react-redux';
// import { } from '../../actions/shopping_cart_actions';
import ShoppingCart from './shopping_cart';

const mapStateToProps = state => ({
  shopping_cart: state.shopping_cart
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
