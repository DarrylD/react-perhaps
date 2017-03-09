// import React from 'react';
// import ReactDOM from 'react-dom';
// import { browserHistory } from 'react-router'
//
import Routes from './routes';

import './css/index.scss';
//
//
// ReactDOM.render(
//     <Routes history={browserHistory} />,
//     document.getElementById('root')
// );

/*
  redux-observable does not automatically add every RxJS operator to
  the Observable prototype. Because there are many ways to add them,
  our examples will not include any imports. If you want to add every
  operator, put import 'rxjs'; in your entry index.js.
  More info: https://github.com/ReactiveX/rxjs#installation-and-usage
 */
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';

const store = configureStore();
const history = syncHistoryWithStore(
    browserHistory,
    store
);

ReactDOM.render(
    <Provider store={store}>
        <Routes history={history} />
    </Provider>,
    document.getElementById('root')
);
