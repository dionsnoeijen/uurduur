'use strict';

const app = require('express')();
import Subscribe from './helpers/Subscribe';
import EventStore from 'event-store-client';

// Constants
const PORT = 8090;

var config = {
    'eventStore': {
        'address': "127.0.0.1",
        'port': 1113,
        'stream': '$stats-127.0.0.1:2113',
        'credentials': {
            'username': "admin",
            'password': "changeit"
        }
    },
    'debug': false
};

// Container command handler
Subscribe.to('container', function(msg) {

    console.log(msg.content.toString());
});

app.get('/', function (req, res) {

    res.send('Hello world! I am your domain model.\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
