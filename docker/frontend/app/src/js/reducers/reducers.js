'use strict';

import { combineReducers } from 'redux';
import { ADD_TO_TABLE } from '../actions/actions';

var initialState = {
    data: [
        {text: 'I HAVE NO DATA'}
    ]
};

function items(state = [], action) {

    if (state.length === 0) {
        return initialState;
    }

    var add = [];
    if (action.data !== undefined) {
        for (var value of action.data.entries()) {
            add.push({
                text: value[1]
            });
        }
    }

    switch (action.type) {
        case ADD_TO_TABLE:
            return [
                ...state,
                ...add
            ];
        default:
            return state
    }
}

const uurApp = combineReducers({
    items
});

export default uurApp;
