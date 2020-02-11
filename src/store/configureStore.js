import { combineReducers, createStore } from 'redux';
import exemploReducer from './reducers/exemploReducer';

const rootReducer = combineReducers({ exemplo: exemploReducer });

export default () => createStore(rootReducer);
