'use strict';

export default class CreateProjection {

    constructor({
        name,
        projection
    } = {}) {
        this.name = name;
        this.type = 'js';
        this.checkpoints = 'true';
        this.enabled = 'true';
        this.emit = 'false';
        this.trackemittedstreams = 'false';
        this.projection = projection;
    }

    static create(name, projection) {
        return new CreateProjection({
            name: name,
            projection: projection
        });
    }
}
