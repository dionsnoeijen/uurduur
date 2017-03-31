'use strict';

import fs from 'fs'

export default class FieldType {

    constructor(name, value, label) {
        this.name = name;
        this.value = value;
        this.label = label;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    getName() {
        return this.name;
    }

    getLabel() {
        return this.label;
    }
}
