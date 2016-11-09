import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ResultsMiddleware from './results_middleware';
import ProductMiddleware from './product_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ResultsMiddleware,
  ProductMiddleware
);

export default RootMiddleware;
