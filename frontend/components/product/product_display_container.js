import { connect } from 'react-redux';
import ProductDisplay from './product_display';
import { requestItem } from '../../actions/product_actions';
import { saveCartItemToDatabase
       } from '../../actions/shopping_cart_actions';


const mapStateToProps = (state, {params}) => ({
  productId: parseInt(params.productId),
  product: state.product,
  numProducts: state.shopping_cart.items.length
});

const mapDispatchToProps = dispatch => {
  return {
    requestItem: (id) => dispatch(requestItem(id)),
    saveCartItemToDatabase: (item) => dispatch(saveCartItemToDatabase(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDisplay);
