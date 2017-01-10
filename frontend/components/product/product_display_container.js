import { connect } from 'react-redux';
import ProductDisplay from './product_display';
import { requestItem, clearItemFromState } from '../../actions/product_actions';
import { saveCartItemToDatabase } from '../../actions/shopping_cart_actions';
import { clearReviewsState, requestUserReview }
    from '../../actions/reviews_actions';
import { addItemInLocalCart }
    from '../../actions/local_shopping_cart_actions';

const countItems = (cart, user) => {
  let count = 0;

  if (user) cart.items.forEach(item => {count += item.quantity;});
  else cart.localItems.forEach(item => {count += item.quantity;});
  return count;
};

const mapStateToProps = (state, {params}) => ({
  productId: parseInt(params.productId),
  product: state.product,
  numProducts: countItems(state.shopping_cart, state.session.currentUser),
  currentUserId: state.session.currentUser ? state.session.currentUser.id : null
});

const mapDispatchToProps = dispatch => {
  return {
    requestItem: id => dispatch(requestItem(id)),
    saveCartItemToDatabase: item => dispatch(saveCartItemToDatabase(item)),
    clearReviewsState: () => dispatch(clearReviewsState()),
    clearItemFromState: () => dispatch(clearItemFromState()),
    requestUserReview: productId => dispatch(requestUserReview(productId)),
    addItemInLocalCart: item => dispatch(addItemInLocalCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDisplay);
