import { connect } from 'react-redux';
import ProductDisplay from './product_display';
import { requestItem } from '../../actions/product_actions';
import { addItemToCart,
         saveCartItemToDatabase
       } from '../../actions/shopping_cart_actions';


const mapStateToProps = (state, {params}) => ({
  productId: parseInt(params.productId),
  product: state.product
});

const mapDispatchToProps = dispatch => {
  return {
    requestItem: (id) => dispatch(requestItem(id)),
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    saveCartItemToDatabase: (item) => dispatch(saveCartItemToDatabase(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDisplay);
