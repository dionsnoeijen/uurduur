'use strict';

export const ADD_TO_TABLE = 'ADD_TO_TABLE';

export function addToTable(text) {
    return {
        type: ADD_TO_TABLE,
        text: text
    }
}