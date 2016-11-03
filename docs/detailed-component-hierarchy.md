## Component Hierarchy

**AuthFormContainer**
  - mapStateToProps
      + currentUser:  state.session.currentUser
  - mapDispatchToProps
      + signup: (user) => dispatch(signup(user))
      + login: (user) => dispatch(login(user))
  - connect
      + SignInForm
      + CreateAccountForm

**CategoryContainer**
  - mapDispatchToProps
      + requestCategoryItems: (category) => dispatch(requestCategoryItems(category))
  - connect
      + CategoryIndex

**CategoryIndex**
  - CategoryIndexItem
      + onClick will dispatch props.requestCategoryItems(category), change url

**SearchBarContainer**
  - mapDispatchToProps
      + requestSearchItems: (keywords) => dispatch(requestSearchItems(keywords))
  - connect
      + SearchBar
        - onSubmit will dispatch props.requestSearchItems(keywords), change url

**ProductsContainer**
  - mapStateToProps
      + results: state.results
      + currentUser: state.currentUser
  - mapDispatchToProps
      + addItemToCart: (item) => dispatch(addItemToCart(item))
      + requestItemInfo: (item) => dispatch(requestItemInfo(item))
      + addReview: (item) => dispatch(addReview(item))
      + requestReviews: (item) => dispatch(requestReviews(item))
  - connect
      + ProductsIndex

**ProductsIndex**
  - ProductsIndexItem
    + ProductDetail

**ShoppingCartContainer**
  - mapStateToProps
      + shoppingCart: state.shoppingCart
      + currentUser: state.currentUser
  - mapDispatchToProps
      + removeItem: (item) => dispatch(removeItem(item))
      + updateQuantity: (item, amount) => dispatch(updateQuantity(item, amount))
  - connect
      + ShoppingCartIndex

**ShoppingCartIndex**
  - ShoppingCartIndexItem
    + ShoppingCartItemDetail

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AuthFormContainer" |
| "/" | "SearchBarContainer" |
| "/" | "CategoryContainer" |
| "/category/:category" | "ProductsIndex" |
| "/category/:category/category-id/:id" | "DisplayResults" |
| "/category/:category/category-id/:id" | "DisplayResults" |
| "/shopping-cart/:id" | "ShoppingCartIndex" |
