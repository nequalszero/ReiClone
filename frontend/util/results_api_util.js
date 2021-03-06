export const fetchCategoryItems = (categoryId, success, error) => (
  $.ajax({
    url: `api/categories/${categoryId}`,
    type: 'GET',
    success,
    error
  })
);

export const fetchCategories = (success, error) => (
  $.ajax({
    url: `api/categories`,
    type: 'GET',
    success,
    error
  })
);
