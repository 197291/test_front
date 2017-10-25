import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import {common}  from '../middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
                          composeEnhancers( applyMiddleware(common)
              ));
export default store;
