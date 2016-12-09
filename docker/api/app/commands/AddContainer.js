'use strict';

import { assert } from 'chai'

export default class AddContainer {

    constructor(
        uuid,
        name
    ) {
        assert.typeOf(uuid, 'string');
        assert.typeOf(name, 'string');
        assert.isAtLeast(name.length, 1);

        this.uuid = uuid;
        this.name = name;
    }

    static create(uuid, name) {

        return new AddContainer(
            uuid, name
        );
    }
}
