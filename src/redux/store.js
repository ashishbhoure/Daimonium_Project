import {createStore, combineReducers} from 'redux';
import auth from './reduser';

const rootReducer = combineReducers({
  data: auth,
});

export const store = createStore(rootReducer);
