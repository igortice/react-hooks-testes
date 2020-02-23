import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { persistor, store } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const AppRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<AppRedux />, document.getElementById('root'));
