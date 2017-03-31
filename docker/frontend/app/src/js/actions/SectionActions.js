import { assert } from 'chai'
import uuid from 'uuid'
import { ajaxPost, ajaxGet } from '../helpers/Ajax'

export const REQUEST_SECTION_HTML_FORM = 'REQUEST_SECTION_FORM';
export const RECEIVE_SECTION_HTML_FORM = 'RECEIVE_SECTION_FORM';
export const REQUEST_SECTION_FORM_FIELDS = 'REQUEST_SECTION_FORM_FIELDS';
export const RECEIVE_SECTION_FORM_FIELDS = 'RECEIVE_SECTION_FORM_FIELDS';
export const SUCCESS = 'success';
export const ERROR = 'error';

const requestSectionHtmlForm = (section) => {
    return {
        type: REQUEST_SECTION_HTML_FORM,
        section
    }
};

const requestSectionFormFields = (section) => {
    return {
        type: REQUEST_SECTION_FORM_FIELDS,
        section
    }
};

const receiveSectionHtmlForm = (section, json) => {
    return {
        type: RECEIVE_SECTION_HTML_FORM,
        section,
        isFetching: false,
        form: json.form,
        receivedAt: Date.now()
    }
};

const receiveSectionFromFields = (section, json) => {
    return {
        type: RECEIVE_SECTION_FORM_FIELDS,
        section,
        isFetching: false,
        fields: json.fields,
        receivedAt: Date.now()
    }
};

const errorReceiveSectionHtmlForm = (section, error) => {
    return {
        type: RECEIVE_SECTION_HTML_FORM,
        section,
        isFetching: false,
        error: error,
        receivedAt: Date.now()
    }
};

const errorReceiveSectionFormFields = (section, error) => {
    return {
        type: RECEIVE_SECTION_FORM_FIELDS,
        section,
        isFetching: false,
        error: error,
        receivedAt: Date.now()
    }
};

export const fetchSectionHtmlForm = (section) => {
    return (dispatch) => {
        dispatch(requestSectionHtmlForm(section));
        return ajaxGet('http://localhost:8070/' + section + '/form')
            .then((data) => {
                dispatch(receiveSectionHtmlForm(section, JSON.parse(data)));
            }).catch((error) => {
                dispatch(errorReceiveSectionHtmlForm(section, error));
            });
    }
};

export const fetchSectionFormFields = (section) => {
    return (dispatch) => {
        dispatch(requestSectionFormFields(section));
        return ajaxGet('http://localhost:8070/' + section + '/formfields')
            .then((data) => {
                dispatch(receiveSectionFromFields(section, JSON.parse(data)));
            }).catch((error) => {
                dispatch(errorReceiveSectionFormFields(section, error));
            });
    }
};


const saveSection = (section, sectionData) => {
    ajaxPost('http://localhost:8070/' + section + '/save', sectionData)
        .then((data) => {
            return {
                type: 'SAVE_SECTION',
                data,
                uuid: uuid.v4()
            }
        }).catch((err) => {
            console.log('UH OH', err)
        });
};
