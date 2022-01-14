import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './action-reducer';

const reducers = combineReducers({
  reducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
