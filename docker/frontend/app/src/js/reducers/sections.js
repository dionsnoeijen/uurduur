'use strict';

import { combineReducers } from 'redux';
import { REQUEST_SECTION_FORM, RECEIVE_SECTION_FORM } from '../actions/SectionActions';

function form(state = {
   isFetching: false,
   form: ''
}, action) {
    switch (action.type) {
        case REQUEST_SECTION_FORM:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_SECTION_FORM:
            return Object.assign({}, state, {
                isFetching: false,
                form: action.form,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function sectionForm(state = {}, action) {
    switch (action.type) {
        case RECEIVE_SECTION_FORM:
        case REQUEST_SECTION_FORM:
            return Object.assign({}, state, {
                [action.section]: form(state[action.section], action)
            });
        default:
            return state;
    }
}

const sections = combineReducers({
    forms: sectionForm
});

export default sections;
