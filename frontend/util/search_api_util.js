export const search = (data, success, error) => (
  $.ajax({
    type: 'GET',
    url: 'api/search',
    data,
    success,
    error
  })
);
