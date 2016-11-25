'use strict';

export const ADD_TO_TABLE = 'ADD_TO_TABLE';

function makeXhrRequest(formData) {

    let xhr = new XMLHttpRequest();

    xhr.open("POST", f.action);
    xhr.send(formData);
}

export function addToTable(data) {

    // Disabled for now
    // makeXhrRequest(data);

    console.log('addToTable');

    return {
        type: ADD_TO_TABLE,
        data
    }
}
