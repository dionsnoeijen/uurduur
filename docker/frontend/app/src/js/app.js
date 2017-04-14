'use strict';

import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddleware
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
