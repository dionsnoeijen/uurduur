'use strict';

import uuid from 'uuid';

export default class SectionSaved {

    constructor(data) {
        this.eventId = uuid.v4();
        this.eventType =
            data.name.charAt(0).toUpperCase() +
            data.name.slice(1) +
            this.constructor.name;
        //this.section = 'section.data-' + data.name;
        this.data = data;
    }

    static create(data) {
        return new SectionSaved(data);
    }
}
