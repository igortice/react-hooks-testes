import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppRedux />, document.getElementById('root'));
