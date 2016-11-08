import { connect } from 'react-redux';
import ResultsIndex from './results_index';
import { requestCategoryItems } from '../../actions/results_actions';

const mapStateToProps = (state, {params}) => ({
  categoryId: parseInt(params.categoryId),
  results: state.results
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
