import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProductMiddleware from './product_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ProductMiddleware
);

export default RootMiddleware;
