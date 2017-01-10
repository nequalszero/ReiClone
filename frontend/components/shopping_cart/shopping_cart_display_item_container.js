import {connect} from 'react-redux';
import { saveCartItemToDatabase,
         removeUserItemFromDatabase,
         updateQuantityInDatabase
       } from '../../actions/shopping_cart_actions';
import ShoppingCartDisplayItem from './shopping_cart_display_item';
import { deleteItemInLocalCart, updateItemInLocalCart }
      from '../../actions/local_shopping_cart_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser ? state.session.currentUser.id : null
});

const mapDispatchToProps = dispatch => ({
  updateQuantityInDatabase: item => dispatch(updateQuantityInDatabase(item)),
  updateItemInLocalCart: item => dispatch(updateItemInLocalCart(item)),
  deleteItemInLocalCart: item => dispatch(deleteItemInLocalCart(item)),
  removeUserItemFromDatabase: item => dispatch(removeUserItemFromDatabase(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartDisplayItem);
