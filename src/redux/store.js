import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import UserReducer from './users/users';

const reducers = combineReducers({
  UserReducer,
});

export default createStore(reducers, applyMiddleware(thunk, logger));
