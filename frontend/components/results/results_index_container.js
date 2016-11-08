import { connect } from 'react-redux';
import ResultsIndex from './results_index';
import { requestCategoryItems } from '../../actions/product_actions';

const mapStateToProps = (state, {params}) => ({
  categoryId: parseInt(params.categoryId),
  product: state.product
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCategoryItems: (id) => dispatch(requestCategoryItems(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsIndex);
