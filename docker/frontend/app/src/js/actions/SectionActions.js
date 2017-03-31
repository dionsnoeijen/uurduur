import { assert } from 'chai'
import uuid from 'uuid'
import { ajaxPost, ajaxGet } from '../helpers/Ajax'

export const REQUEST_SECTION_FORM = 'REQUEST_SECTION_FORM';
export const RECEIVE_SECTION_FORM = 'RECEIVE_SECTION_FORM';
export const SUCCESS = 'success';
export const ERROR = 'error';

// const shape = {
//     activeSection: 'questionnaire',
//     sections: {
//         questionnaire: {
//             form: {
//                 isFetching: true,
//                 html: ''
//             },
//             entries: [
//
//             ]
//         },
//         news: {
//             form: {
//                 isFetching: true,
//                 html: ''
//             },
//             entries: [
//
//             ]
//         }
//     }
// };

const requestSectionForm = (section) => {
    return {
        type: REQUEST_SECTION_FORM,
        section
    }
};

const receiveSectionForm = (section, json) => {
    return {
        type: RECEIVE_SECTION_FORM,
        section,
        isFetching: false,
        form: json.form,
        receivedAt: Date.now()
    }
};

const errorReceiveSectionForm = (section, error) => {
    return {
        type: RECEIVE_SECTION_FORM,
        section,
        isFetching: false,
        error: error,
        receivedAt: Date.now()
    }
};

export const fetchSectionForm = (section) => {

    return (dispatch) => {

        dispatch(requestSectionForm(section));

        return ajaxGet('http://localhost:8070/' + section + '/form')
            .then((data) => {
                console.log('THE DATA', data);
                dispatch(receiveSectionForm(section, JSON.parse(data)));
            }).catch((error) => {
                console.log('ERROR', error);
                dispatch(errorReceiveSectionForm(section, error));
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
