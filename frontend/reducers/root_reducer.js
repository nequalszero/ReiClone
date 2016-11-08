import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ResultsReducer from './results_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  results: ResultsReducer
});

export default RootReducer;
