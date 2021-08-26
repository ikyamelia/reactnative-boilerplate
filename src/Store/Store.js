import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import Storage from '@react-native-async-storage/async-storage';
import createSaga from 'redux-saga';
import {SagaWacther, SagaWatcher} from './SagaWatcher';

import {AllReducer} from './AllReducer';

const persistConfig = {
  key: 'rizamelia-biller',
  storage: Storage,
};

const sagaMiddleWare = createSaga();

const persistedReducer = persistReducer(persistConfig, AllReducer);

export const Store = createStore(
  persistedReducer,
  applyMiddleware(logger, sagaMiddleWare),
);

export const Persistor = persistStore(Store);

sagaMiddleWare.run(SagaWatcher);
