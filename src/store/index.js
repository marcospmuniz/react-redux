import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combineReducer from '../modules/rootReducer';
import rootSaga from '../modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// habilita o reactotron no redux
const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleware)
      )
    : applyMiddleware(sagaMiddleware);

const store = createStore(combineReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
