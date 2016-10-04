'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestForm from 'form/TestForm';
import Table from 'element/Table';

import { createStore } from 'redux';
import testApp from './reducers/reducers';

let store = createStore(testApp);

import { addToTable } from './actions/actions';

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addToTable('Some'));
store.dispatch(addToTable('Real'));
store.dispatch(addToTable('Table'));
store.dispatch(addToTable('Data'));

unsubscribe();

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Test form</h1>
                <TestForm/>
                <h1>Data</h1>
                <Table/>
            </div>
        );
    }
}

ReactDOM.render(<App />,
    document.getElementById('example')
);