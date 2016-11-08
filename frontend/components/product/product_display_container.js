import { connect } from 'react-redux';
import ProductDisplay from './product_display';
import { requestItem } from '../../actions/product_actions';

const mapStateToProps = (state, {params}) => ({
  productId: parseInt(params.productId),
  product: state.product
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestItem: (id) => dispatch(requestItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDisplay);
