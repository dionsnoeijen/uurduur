'use strict';

import { assert } from 'chai';

export default class Name
{
    constructor(name) {

        assert.isString(name);
        assert.isAtLeast(name.length, 1);

        this.name = name;
    }

    createFromString(name) {

        return new Name(name);
    }

    toString() {

        return this.name;
    }
}
