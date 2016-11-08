import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { requestCategories } from '../../actions/results_actions';

const mapStateToProps = state => {
  return {
    categories: state.results.categories
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
