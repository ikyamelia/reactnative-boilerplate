import {combineReducers} from 'redux';
import GlobalReducer from './GlobalReducer';

export const AllReducer = combineReducers({
  Global: GlobalReducer,
});
