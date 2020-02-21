import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';

const store = configureStore();

const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppRedux />, document.getElementById('root'));
