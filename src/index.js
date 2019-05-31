/* global document:true */

import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import configureStore from './store/configureStore';
import App from './containers/App';

const { persistor, store } = configureStore();
const container = document.getElementById('container');

const mount = () => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    container
  );
};

mount();
