import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  product: ProductReducer
});

export default RootReducer;
