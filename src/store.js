import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import asyncReducer from './reducers/index';

const store = createStore(asyncReducer, applyMiddleware(thunkMiddleware));

export default store;