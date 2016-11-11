import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import reducers from './reducers';
import routes from './routes';

const routingMiddleware = routerMiddleware(browserHistory);
const createStoreWithMiddleWare = applyMiddleware(thunk, routingMiddleware)(createStore);
const store = createStoreWithMiddleWare(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f, autoRehydrate());
// const history = syncHistoryWithStore(browserHistory, store);
persistStore(store);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.containers'));
