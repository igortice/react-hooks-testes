import { combineReducers, createStore, applyMiddleware } from 'redux';
import exemploReducer from './reducers/exemploReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ exemplo: exemploReducer });

export default () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
