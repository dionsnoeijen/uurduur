'use strict';

import { assert } from 'chai'

export default class Uuid
{
    constructor(uuid) {

        assert.isString(uuid);
        assert.isAtLeast(uuid.length, 36);

        this.uuid = uuid;
    }

    static createFromString(uuid) {

        return new Uuid(uuid);
    }

    toString() {

        return this.uuid;
    }
}
