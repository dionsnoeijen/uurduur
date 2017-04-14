'use strict';

import uuid from 'uuid';

export default class SectionSaved {

    constructor(data) {
        this.eventId = uuid.v4();
        this.eventType = this.constructor.name;
        this.section = data.section;
        this.data = data;
    }

    static create(data) {
        return new SectionSaved(data);
    }
}
