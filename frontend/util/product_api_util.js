export const fetchItem = (productId, success, error) => (
  $.ajax({
    url: `api/products/${productId}`,
    type: 'GET',
    success,
    error
  })
);
