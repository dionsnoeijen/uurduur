'use strict';

const app = require('express')();
import Subscribe from './helpers/Subscribe';
import EventStoreClient from 'event-store-client';
import ContainerCreated from './events/ContainerCreated';

// Constants
const PORT = 8090;

const config = {
    eventStore: {
        address: "uurduur_eventstore",
        port: 2113,
        credentials: {
            username: "admin",
            password: "changeit"
        }
    },
    debug: false
};

const options = {
    host: config.eventStore.address,
    port: config.eventStore.port,
    debug: config.debug,
    onError: function(e) {
        console.log('lES CONNECTION DU ERROR');
    }
};

var connection = new EventStoreClient.Connection(options);
connection.sendPing(function() {
    connection.close();
    console.log('CONNECTED?!?!?!?!?');
});

// Container command handler
Subscribe.to('container', function(msg) {

    const connection = new EventStoreClient.Connection(options);
    connection.writeEvents(
        'ContainersAdded',
        EventStoreClient.ExpectedVersion.Any,
        false,
        [ new ContainerCreated(msg.uuid, msg.name) ],
        config.credentials,
        function(completed) {
            console.log('Events written result: ' + EventStoreClient.OperationResult.getName(completed.result));
            connection.close();
        }
    );

});

app.get('/', function (req, res) {

    res.send('Hello world! I am your domain model.\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
