import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import doctorsReducer from './doctors/doctors';
import doctorsDetailReducer from './doctors/DetailDoctors';
import UserReducer from './users/users';
import addItemReducer from './doctors/AddItem';
import deleteItemReducer from './doctors/DeleteList';

const reducers = combineReducers({
  doctors: doctorsReducer,
  doctorsDetailReducer,
  UserReducer,
  addItemReducer,
  deleteItemReducer,
});

export default createStore(reducers, applyMiddleware(thunk, logger));
