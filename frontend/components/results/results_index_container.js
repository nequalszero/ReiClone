import { connect } from 'react-redux';
import ResultsIndex from './results_index';
import { requestCategoryItems } from '../../actions/results_actions';

const sortResults = (results) => {
  if (results.items) {
    results.items.sort( (a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      }
    });
  }
  return results;
};

const mapStateToProps = (state, {params}) => ({
  categoryId: parseInt(params.categoryId),
  results: sortResults(state.results)
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
