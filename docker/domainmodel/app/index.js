'use strict';

const app = require('express')();
import EventStore from './helpers/EventStore';
import Subscribe from './helpers/Subscribe';
import SectionSaved from './events/SectionSaved';

const PORT = 8090;

const Event = new EventStore();

// Save an event to a stream
Subscribe.to('section', data => {
    Event.write('section.data-' + data.name, [
        SectionSaved.create(data)
    ]);
});

// Create a projection based on a data source
Subscribe.to('create-projection', data => {
    Event.createProjection(
        data.name,
        data.type,
        data.checkpoints,
        data.enabled,
        data.emit,
        data.trackemittedstreams,
        data.projection
    );
});

app.get('/', function (req, res) {
    res.send('Hello world! I am your domain model.\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
