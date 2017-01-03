export const fetchReviews = (productId, success, error) => (
  $.ajax({
    url: `api/products/${productId}/reviews`,
    type: 'GET',
    success,
    error
  })
);

export const deleteReview = (review, success, error) => (
  $.ajax({
    url: `api/reviews/${review.review.id}`,
    type: 'DELETE',
    success,
    error
  })
);

export const updateReview = (review, success, error) => (
  $.ajax({
    url: `api/reviews/${review.review.id}`,
    type: 'PATCH',
    data: review,
    success,
    error
  })
);

export const createReview = (review, success, error) => {
  return $.ajax({
    url: `api/reviews`,
    type: 'POST',
    data: review,
    success,
    error
  });
};
