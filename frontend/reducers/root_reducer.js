import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ResultsReducer from './results_reducer';
import ProductReducer from './product_reducer';
import ShoppingCartReducer from './shopping_cart_reducer';
import ReviewsReducer from './reviews_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  results: ResultsReducer,
  product: ProductReducer,
  shopping_cart: ShoppingCartReducer,
  reviews: ReviewsReducer
});

export default RootReducer;
