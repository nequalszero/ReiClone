## Component Hierarchy

**AuthFormContainer**
  - AuthForm (SignInForm / CreateAccountForm)
  - MyAccount

**CategoryContainer**
  - CategoryIndex
    + CategoryIndexItem
      - ResultsIndex

**SearchContainer**
  - Search
  - DisplayResults

**DisplayResults**
  - DisplayResultsItem
    + DisplayResultsDetail

**FilterIndex**
  - FiltersIndexItem
    + FiltersDetail

**ShoppingCartIndex**
  - ShoppingCartIndexItem
    + ShoppingCartItemDetail


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/home/:category" | "DisplayResults" |
| "/home/:category" | "FilterIndex" |
| "/home/:category/:filters/" | "DisplayResults" |
| "/home/:search/:search-params/" | "DisplayResults" |
| "/shopping-cart/:id" | "ShoppingCartIndex" |
| "/" | "SearchContainer" |
| "/" | "CategoryContainer" |
