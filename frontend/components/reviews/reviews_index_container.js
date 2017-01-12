import { connect } from 'react-redux';
import ReviewsIndex from './reviews_index';
import { requestReviews,
         createReview,
         updateReview,
         deleteReview,
         requestAdditionalReviews
       }
       from '../../actions/reviews_actions';

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  userReview: state.reviews.userReview,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    updateReview: review => dispatch(updateReview(review)),
    deleteReview: review => dispatch(deleteReview(review)),
    requestAdditionalReviews: data => dispatch(requestAdditionalReviews(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsIndex);
