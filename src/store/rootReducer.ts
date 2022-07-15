import { combineReducers } from 'redux';
import reducer from './reducers/repositories';

const reducers = combineReducers({
  repositories: reducer
});

export default reducers;
