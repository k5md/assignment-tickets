/* global window:true */

import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from '../reducers';

const config = {
  key: 'root',
  storage,
  debug: true,
};

const middleware = [];
const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
/* eslint-enable */

const persistConfig = { enhancers };
const store = createStore(reducers, undefined, composeEnhancers(...enhancers));
const persistor = persistStore(store, persistConfig, () => {

});
const configureStore = () => ({ persistor, store });

export default configureStore;
