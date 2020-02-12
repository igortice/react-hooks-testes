import { combineReducers, createStore, applyMiddleware } from 'redux';
import exemploReducer from './reducers/exemploReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ exemplo: exemploReducer });

export default () => createStore(rootReducer, applyMiddleware(thunk));
