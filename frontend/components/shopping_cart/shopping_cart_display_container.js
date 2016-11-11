import {connect} from 'react-redux';
import { saveCartItemToDatabase,
         removeUserItemFromDatabase,
         updateQuantityInDatabase,
         requestUserItems
       } from '../../actions/shopping_cart_actions';
import ShoppingCartDisplay from './shopping_cart_display';

const mapStateToProps = state => ({
  shopping_cart: state.shopping_cart
});

const mapDispatchToProps = dispatch => ({
  saveCartItemToDatabase: (item) => dispatch(saveCartItemToDatabase(item)),
  removeUserItemFromDatabase: (item) => dispatch(removeUserItemFromDatabase(item)),
  updateQuantityInDatabase: (item) => dispatch(updateQuantityInDatabase(item))
});

export default connect(
  mapStateToProps
)(ShoppingCartDisplay);
