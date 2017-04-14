'use strict';

import fs from 'fs';
import FieldType from '../FieldType/FieldType';

export default class RadioButtons extends FieldType {

    constructor({
        name = '',
        value = '',
        label = '',
        options = []
    } = {}) {
        super(name, value, label);
        this.options = options;
    }

    getTemplate() {
        return fs.readFileSync(__dirname + '/template/RadioButtons.html', 'utf8')
            .replace(/{{ name }}/g, this.name)
            .replace(/{{ value }}/g, this.value)
            .replace(/{{ label }}/g, this.label);
    }

    getOptions() {
        return this.options;
    }

    static create({
        name = '',
        value = '',
        label = '',
    } = {}) {
        return new RadioButtons({
            name: name,
            value: value,
            label: label
        });
    }
}
