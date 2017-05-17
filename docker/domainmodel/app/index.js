'use strict';

const app = require('express')();
import EventStore from './helpers/EventStore';
import Subscribe from './helpers/Subscribe';
import ContainerCreated from './events/ContainerCreated';
import SectionSaved from './events/SectionSaved';

const PORT = 8090;

const Event = new EventStore();

Subscribe.to('section', function(data) {
    Event.write(data.name, [
        SectionSaved.create(data)
    ]);
});

app.get('/', function (req, res) {
    res.send('Hello world! I am your domain model.\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
