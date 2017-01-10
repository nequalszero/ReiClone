import {connect} from 'react-redux';
import { saveCartItemToDatabase,
         removeUserItemFromDatabase,
         updateQuantityInDatabase,
         requestUserItems
       } from '../../actions/shopping_cart_actions';
import ShoppingCartDisplay from './shopping_cart_display';
import { deleteItemInLocalCart,
         updateItemInLocalCart,
         emptyLocalCart
       } from '../../actions/local_shopping_cart_actions';

const mapStateToProps = state => ({
  shopping_cart: state.shopping_cart,
  currentUser: state.session.currentUser ? state.session.currentUser.id : null
});

const mapDispatchToProps = dispatch => ({
  saveCartItemToDatabase: (item) => dispatch(saveCartItemToDatabase(item)),
  removeUserItemFromDatabase: (item) => {
    dispatch(removeUserItemFromDatabase(item));
  },
  updateQuantityInDatabase: (item) => dispatch(updateQuantityInDatabase(item)),
  deleteItemInLocalCart: item => dispatch(deleteItemInLocalCart(item)),
  updateItemInLocalCart: item => dispatch(updateItemInLocalCart(item)),
  emptyLocalCart: () => dispatch(emptyLocalCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartDisplay);
