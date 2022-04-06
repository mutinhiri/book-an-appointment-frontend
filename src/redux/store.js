import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import UserReducer from './users/users';
import appointmentReducer from './appointments/appointment';

const reducers = combineReducers({
  UserReducer,
  appointments: appointmentReducer,
});

export default createStore(reducers, applyMiddleware(thunk, logger));
