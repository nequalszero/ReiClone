import { REQUEST_REVIEWS,
         DELETE_REVIEW,
         CREATE_REVIEW,
         UPDATE_REVIEW,
         receiveReview,
         receiveReviews,
         receiveErrors,
         receiveUpdatedReview }
    from '../actions/reviews_actions';
import { fetchReviews,
         deleteReview,
         createReview,
         updateReview
       } from '../util/reviews_api_util';

const ReviewsMiddleware = ({ getState, dispatch }) => next => action => {
  let successCallback;
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case REQUEST_REVIEWS:
      successCallback = reviews => dispatch(receiveReviews(reviews));
      fetchReviews(action.productId, successCallback, errorCallback);
      return next(action);

    case DELETE_REVIEW:
      successCallback = () => dispatch(receiveReview({}));
      deleteReview(action.review, successCallback, errorCallback);
      return next(action);

    case CREATE_REVIEW:
      successCallback = review => dispatch(receiveReview(review));
      createReview(action.review, successCallback, errorCallback);
      return next(action);

    case UPDATE_REVIEW:
      successCallback = review => dispatch(receiveUpdatedReview(review));
      updateReview(action.review, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default ReviewsMiddleware;
