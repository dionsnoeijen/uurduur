'use strict';

export default class ContainerCreated {

    constructor(uuid, name) {

        this.eventId = uuid;
        this.eventType = this.constructor.name;
        this.data = {
            name: name
        };
    }

    static create(uuid, name) {
        return new ContainerCreated(uuid, name);
    }
}
