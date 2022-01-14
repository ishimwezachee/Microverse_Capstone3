import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import covidReducer from '../redux/action-reducer';

const reducer = combineReducers({
  covidReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
