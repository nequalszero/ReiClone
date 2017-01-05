export const REQUEST_REVIEWS = "REQUEST_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEWS";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_UPDATED_REVIEW = "RECEIVE_UPDATED_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_REVIEWS_STATE = "CLEAR_REVIEWS_STATE";

export const requestReviews = productId => ({
  type: REQUEST_REVIEWS,
  productId
});

export const deleteReview = review => ({
  type: DELETE_REVIEW,
  review
});

export const updateReview = review => ({
  type: UPDATE_REVIEW,
  review
});

export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveUpdatedReview = updatedReview => ({
  type: RECEIVE_UPDATED_REVIEW,
  updatedReview
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearReviewsState = () => ({
  type: CLEAR_REVIEWS_STATE
});
