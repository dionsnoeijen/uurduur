'use strict';

import fs from 'fs';
import FieldType from '../FieldType/FieldType';

export default class RadioButtons extends FieldType {

    constructor({
        name = '',
        value = '',
        label = ''
    } = {}) {
        super(name, value, label);
    }

    getTemplate() {
        return fs.readFileSync(__dirname + '/template/RadioButtons.html', 'utf8')
            .replace(/{{ name }}/g, this.name)
            .replace(/{{ value }}/g, this.value)
            .replace(/{{ label }}/g, this.label);
    }

    getPlaceholder() {
        return this.placeholder;
    }

    static create({
        name = '',
        value = '',
        label = '',
        placeholder = ''
    } = {}) {
        return new RadioButtons({
            name: name,
            value: value,
            label: label
        });
    }
}
