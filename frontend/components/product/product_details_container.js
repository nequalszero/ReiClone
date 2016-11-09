import { connect } from 'react-redux';
import ProductDetails from './product_details';
import { requestItem } from '../../actions/product_actions';

const mapStateToProps = (state) => ({
  product: state.product
});

const mapDispatchToProps = dispatch => {
  return {
    requestItem: (id) => dispatch(requestItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
