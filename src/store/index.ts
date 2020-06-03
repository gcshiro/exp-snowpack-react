import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import countReducer from './counter';

const reducer = combineReducers({
  counter: countReducer,
});

const store = configureStore({
  reducer,
});

export default store;
