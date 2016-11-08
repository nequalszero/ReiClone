import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ResultsMiddleware from './results_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ResultsMiddleware
);

export default RootMiddleware;
