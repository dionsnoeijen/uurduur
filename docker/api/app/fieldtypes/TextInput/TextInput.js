'use strict';

import fs from 'fs';
import FieldType from '../FieldType/FieldType';
import TemplateParser from '../../helpers/TemplateParser';

export default class TextInput extends FieldType {

    constructor({
       name = '',
       value = '',
       label = '',
       placeholder = ''
    } = {}) {
        super(name, value, label);
        this.placeholder = placeholder;
    }

    getTemplate() {
        return fs.readFileSync(__dirname + '/template/TextInput.html', 'utf8')
            .replace(/{{ name }}/g, this.name)
            .replace(/{{ value }}/g, this.value)
            .replace(/{{ label }}/g, this.label)
            .replace(/{{ placeholder }}/g, this.placeholder);
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
        return new TextInput({
            name: name,
            value: value,
            label: label,
            placeholder: placeholder
        });
    }
}
