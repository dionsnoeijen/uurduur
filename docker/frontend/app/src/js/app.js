'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './element/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uurApp from './reducers/reducers';

let store = createStore(uurApp);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('example')
);
