'use strict';

import { combineReducers } from 'redux';

import { ADD_TO_TABLE } from '../actions/actions';

function test(state = [], action) {

    console.log(action);

    switch (action.type) {
        case ADD_TO_TABLE:
            return [
                ...state,
                {
                    text: action.text,
                    hyper: 'hyper'
                }
            ];
        default:
            return state
    }
}

const testApp = combineReducers({
    test
});

export default testApp;