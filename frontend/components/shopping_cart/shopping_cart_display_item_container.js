import {connect} from 'react-redux';
import { saveCartItemToDatabase,
         removeUserItemFromDatabase,
         updateQuantityInDatabase
       } from '../../actions/shopping_cart_actions';
import ShoppingCartDisplayItem from './shopping_cart_display_item';

const mapStateToProps = state => ({
  testVar: 1
});

const mapDispatchToProps = dispatch => ({
  // saveCartItemToDatabase: (item) => dispatch(saveCartItemToDatabase(item)),
  removeUserItemFromDatabase: (item) => dispatch(removeUserItemFromDatabase(item)),
  updateQuantityInDatabase: (item) => dispatch(updateQuantityInDatabase(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartDisplayItem);
