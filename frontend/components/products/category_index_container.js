import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { requestCategories } from '../../actions/product_actions';

const mapStateToProps = state => {
  return {
    categories: state.product.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestCategories: () => dispatch(requestCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);
