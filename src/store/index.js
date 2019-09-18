import { createStore } from 'redux';

import combineReducer from '../modules/rootReducer';

// habilita o reactotron no redux
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(combineReducer, enhancer);

export default store;
