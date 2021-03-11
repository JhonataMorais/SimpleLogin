import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, rootSaga } from './ducks';
import middlewares, { sagaMiddleware } from './middlewares';

const configureStore = () => {
  const composeEnhancers =
  globalThis.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;compose;

  const store = createStore(
    rootReducer(),
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
