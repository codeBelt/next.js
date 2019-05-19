import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

/**
 * Since Next.js does server-side rendering, you are REQUIRED to pass
 * `initialState` when creating the store.
 */
function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(null),
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  /**
   * next-redux-saga depends on `sagaTask` being attached to the store.
   * It is used to await the rootSaga task before sending results to the client.
   */
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
