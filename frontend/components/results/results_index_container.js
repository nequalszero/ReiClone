import { connect } from 'react-redux';
import ResultsIndex from './results_index';
import { requestCategoryItems,
         clearResultsFromState
       } from '../../actions/results_actions';

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

const displayText = (params, keywords) => {
  const categories = {
    1: "Sleeping Bags",
    2: "Tents"
  };
  if (params.categoryId) return categories[parseInt(params.categoryId)];
  if (keywords) return `Results for "${keywords}"`;
};

const mapStateToProps = (state, {params}) => {
  return {
  displayText: displayText(params, state.results.keywords),
  results: sortResults(state.results)
};};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestCategoryItems: (id) => dispatch(requestCategoryItems(id)),
    clearResultsFromState: () => dispatch(clearResultsFromState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsIndex);
