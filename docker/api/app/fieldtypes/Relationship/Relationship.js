'use strict';

import fs from 'fs';
import FieldType from '../FieldType/FieldType';

export default class Relationship extends FieldType {

    constructor({
        name = '',
        value = '',
        label = '',
        to = null
    } = {}) {
        super(name, value, label);
        this.to = to;
    }

    static create({
        name = '',
        value = '',
        label = '',
        to = null
    } = {}) {
        return new Relationship({
            name: name,
            value: value,
            label: label,
            to: to
        });
    }
}
