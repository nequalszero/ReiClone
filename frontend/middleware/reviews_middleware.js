import { REQUEST_REVIEWS,
         DELETE_REVIEW,
         CREATE_REVIEW,
         UPDATE_REVIEW,
         RECEIVE_UPDATED_REVIEW,
         RECEIVE_REVIEW,
         REQUEST_USER_REVIEW,
         REQUEST_ADDITIONAL_REVIEWS,
         receiveReview,
         receiveReviews,
         receiveReviewsErrors,
         receiveUpdatedReview,
         receiveUserReview,
         receiveAdditionalReviews }
    from '../actions/reviews_actions';
import { fetchReviews,
         deleteReview,
         createReview,
         updateReview,
         fetchUserReview,
         fetchAdditionalReviews
       } from '../util/reviews_api_util';
import { receiveItem } from '../actions/product_actions';
import { fetchItem } from '../util/product_api_util';

const ReviewsMiddleware = ({ getState, dispatch }) => next => action => {
  let successCallback;
  const errorCallback = xhr => dispatch(receiveReviewsErrors(xhr.responseJSON));

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

    case RECEIVE_UPDATED_REVIEW:
      let productId = action.updatedReview.product_id;
      successCallback = item => dispatch(receiveItem(item));
      fetchItem(productId, successCallback, errorCallback);
      return next(action);

    // inefficient way of updating average rating
    case RECEIVE_REVIEW:
      successCallback = item => dispatch(receiveItem(item));
      fetchItem(action.review.product_id, successCallback, errorCallback);
      return next(action);

    case REQUEST_USER_REVIEW:
      successCallback = userReview => dispatch(receiveUserReview(userReview));
      fetchUserReview(action.productId, successCallback, errorCallback);
      return next(action);

    case REQUEST_ADDITIONAL_REVIEWS:
      successCallback = reviews => dispatch(receiveAdditionalReviews(reviews));
      let data = {productId: action.productId, offset: action.offset};
      fetchAdditionalReviews(data, successCallback, errorCallback);
      return next(action);

    default:
      return next(action);
  }
};

export default ReviewsMiddleware;
