'use strict';

import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import App from './components/App';

import { saveSection, fetchSectionForm } from './actions/SectionActions';

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

store.dispatch(fetchSectionForm('questionnaire')).then(() =>
    console.log('LES STATE', store.getState())
);
