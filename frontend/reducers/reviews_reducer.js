import { RECEIVE_REVIEW,
         RECEIVE_REVIEWS,
         RECEIVE_REVIEWS_ERRORS,
         RECEIVE_UPDATED_REVIEW,
         CLEAR_REVIEWS_STATE,
         CLEAR_USER_REVIEW_STATE,
         RECEIVE_USER_REVIEW,
         RECEIVE_ADDITIONAL_REVIEWS
       } from '../actions/reviews_actions';
import merge from 'lodash/merge';

const _defaultResult = Object.freeze({
  reviews: [],
  userReview: null,
  errors: [],
});

const updateHelper = (reviews, updatedReview) => {
  let targetIdx;

  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].id === updatedReview.id) {
      targetIdx = i;
      break;
    }
  }

  return [
            updatedReview,
            ...reviews.slice(0, targetIdx),
            ...reviews.slice(targetIdx + 1)
         ];
};

const ReviewsReducer = (oldState = _defaultResult, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  newState.errors = [];

  switch(action.type) {
    case RECEIVE_REVIEW:
      newState.reviews = [action.review, ...newState.reviews];
      newState.userReview = action.review;
      return newState;

    case RECEIVE_REVIEWS_ERRORS:
      let errors = action.errors;
      return merge(newState, { errors });

    case RECEIVE_REVIEWS:
      newState.reviews = action.reviews.reviews;
      newState.userReview = action.reviews.user_review;
      return newState;

    case RECEIVE_UPDATED_REVIEW:
      newState.reviews = updateHelper(newState.reviews, action.updatedReview);
      newState.userReview = action.updatedReview;
      return newState;

    case CLEAR_REVIEWS_STATE:
      newState = _defaultResult;
      return newState;

    case CLEAR_USER_REVIEW_STATE:
      newState.userReview = null;
      return newState;

    case RECEIVE_USER_REVIEW:
      newState.userReview = action.userReview.user_review;
      return newState;

    case RECEIVE_ADDITIONAL_REVIEWS:
      newState.reviews = [...newState.reviews, ...action.reviews.reviews];
      return newState;

    default:
      return oldState;
  }
};

export default ReviewsReducer;
