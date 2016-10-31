'''js
{
  currentUser: {
    id: 1,
    email: "guest"
  },

  shoppingCart: {
    id: 1,
    customerId: 1,
    updatedAt: "some date representation",
    items: [
      {id: 7, quantity: 3},
      {id: 10, quantity: 1}
    ]
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []}
    search: ""
  },

  results: {
    1: {
      brand: "Sample Brand",
      name: "Sample Item",
      price: 50,
      rating: 2.5,
      numRatings: 10
    },
    2: {
      brand: "Sample Brand 2",
      name: "Sample Item 2",
      price: 100,
      rating: 3.5,
      numRatings: 15
    }
  },

  filters: {
    category: "Sample category",
    best_use: "Sample best usage",
    temperature_rating: "Sample temperature rating"
  },

}
'''
