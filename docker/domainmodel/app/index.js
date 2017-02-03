'use strict';

const app = require('express')();
import EventStore from './helpers/EventStore';
import Subscribe from './helpers/Subscribe';
import ContainerCreated from './events/ContainerCreated';

const PORT = 8090;

const es = new EventStore();

// Container command handler
Subscribe.to('container', function(msg) {

    es.write('containers', [new ContainerCreated(msg.uuid, msg.name)]);

});

app.get('/', function (req, res) {

    res.send('Hello world! I am your domain model.\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
