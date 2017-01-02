import { RECEIVE_REVIEW,
         RECEIVE_REVIEWS,
         RECEIVE_ERRORS,
       } from '../actions/reviews_actions';
import merge from 'lodash/merge';

const _defaultResult = Object.freeze({
  reviews: null,
  errors: [],
});

const ReviewsReducer = (oldState = _defaultResult, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  newState.errors = [];

  switch(action.type) {
    case RECEIVE_REVIEW:
      let review = action.review;
      newState.reviews = [review].concat(newState.reviews);
      return newState;

    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge(newState, { errors });

    case RECEIVE_REVIEWS:
      let reviews = action.reviews;
      return merge(newState, { reviews });

    default:
      return oldState;
  }
};

export default ReviewsReducer;
