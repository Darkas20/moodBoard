import Redux, { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import sagaMiddleware from './middlewares/saga';

import { rootReducer } from './modules';

const middlewares: Redux.Middleware[] = [sagaMiddleware];

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export { store };
