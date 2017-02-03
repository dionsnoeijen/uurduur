'use strict';

import uuid from 'uuid';

export default class ContainerCreated {

    constructor(id, name) {

        this.eventId = uuid.v4();
        this.eventType = this.constructor.name;
        this.data = {
            containerId: id,
            name: name
        };
    }

    static create(uuid, name) {
        return new ContainerCreated(uuid, name);
    }
}
