'use strict';

import { combineReducers } from 'redux';
import {
    REQUEST_SECTION_HTML_FORM,
    RECEIVE_SECTION_HTML_FORM,
    REQUEST_SECTION_FORM_FIELDS,
    RECEIVE_SECTION_FORM_FIELDS,
    SAVE_SECTION_FORM_FIELDS
} from '../actions/SectionActions';

function htmlForm(state = {
   isFetching: false
}, action) {
    switch (action.type) {
        case REQUEST_SECTION_HTML_FORM:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_SECTION_HTML_FORM:
            return Object.assign({}, state, {
                isFetching: false,
                form: action.form,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function formFields(state = {
    isFetching: false,
}, action) {
    switch (action.type) {
        case REQUEST_SECTION_FORM_FIELDS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_SECTION_FORM_FIELDS:
            return Object.assign({}, state, {
                isFetching: false,
                fields: action.fields,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

function data(state = {}, action) {

    switch (action.type) {
        case SAVE_SECTION_FORM_FIELDS:
            return Object.assign({}, state, action.fields);
        default:
            return state;
    }
}

function sectionData(state = {}, action) {
    switch (action.type) {
        case SAVE_SECTION_FORM_FIELDS:
            return Object.assign({}, state, {
                [action.section]: data(state[action.section], action)
            });
        default:
            return state;
    }
}

function sectionHtmlForm(state = {}, action) {
    switch (action.type) {
        case RECEIVE_SECTION_HTML_FORM:
        case REQUEST_SECTION_HTML_FORM:
            return Object.assign({}, state, {
                [action.section]: htmlForm(state[action.section], action)
            });
        default:
            return state;
    }
}

function sectionFormFields(state = {}, action) {
    switch (action.type) {
        case RECEIVE_SECTION_FORM_FIELDS:
        case REQUEST_SECTION_FORM_FIELDS:
            return Object.assign({}, state, {
                [action.section]: formFields(state[action.section], action)
            });
        default:
            return state;
    }
}

const sections = combineReducers({
    htmlForms: sectionHtmlForm,
    formFields: sectionFormFields
});

export default sections;
