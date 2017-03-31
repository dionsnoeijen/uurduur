'use strict';

import fs from 'fs'

export default class TextInput {

    constructor({
       name = '',
       value = '',
       label = '',
       placeholder = ''
    } = {}) {
        this.name = name;
        this.value = value;
        this.label = label;
        this.placeholder = placeholder;
    }

    getTemplate() {
        return fs.readFileSync(__dirname + '/template/TextInput.html', 'utf8')
            .replace(/{{ name }}/g, this.name)
            .replace(/{{ value }}/g, this.value)
            .replace(/{{ label }}/g, this.label)
            .replace(/{{ placeholder }}/g, this.placeholder);
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
