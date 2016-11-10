import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ResultsMiddleware from './results_middleware';
import ProductMiddleware from './product_middleware';
import ShoppingCartMiddleware from './shopping_cart_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ResultsMiddleware,
  ProductMiddleware,
  ShoppingCartMiddleware
);

export default RootMiddleware;
