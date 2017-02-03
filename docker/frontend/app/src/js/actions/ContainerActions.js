import { assert } from 'chai'
import uuid from 'uuid'
import { ajaxPost } from '../helpers/Ajax'

export const openContainer = (id) => {
    return {
        type: 'OPEN_CONTAINER',
        id
    }
};

export const addContainer = (name) => {

    assert.isString(name, 'name must be a string');
    assert(name.length >= 1, 'name may not be an empty string');

    ajaxPost('http://localhost:8070/container/add', {
        name: name
    })
        .then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log('UH OH', err)
        });

    return {
        type: 'ADD_CONTAINER',
        name,
        uuid: uuid.v4()
    }
};
