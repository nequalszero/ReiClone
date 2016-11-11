import {connect} from 'react-redux';
// import { } from '../../actions/shopping_cart_actions';
import ShoppingCartDisplay from './shopping_cart_display';

const mapStateToProps = state => ({
  shopping_cart: state.shopping_cart
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps
)(ShoppingCartDisplay);
