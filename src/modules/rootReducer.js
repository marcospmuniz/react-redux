import { combineReduxers } from 'redux';

import cart from './cart/reducer';

export default combineReduxers({
  cart,
});
