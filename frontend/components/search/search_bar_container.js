import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { search } from '../../actions/search_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  search: keywords => dispatch(search(keywords))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
