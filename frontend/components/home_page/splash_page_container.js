import { connect } from 'react-redux';
import SplashPage from './splash_page';

import { search } from '../../actions/search_actions';
import { requestItem } from '../../actions/product_actions';
import { requestReviews } from '../../actions/reviews_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  search: keywords => dispatch(search(keywords)),
  requestItem: productId => dispatch(requestItem(productId)),
  requestReviews: productId => dispatch(requestReviews(productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);
