'use strict';

const express = require('express');
var open = require('amqplib').connect('amqp://uurduur_rabbitmq');
var MainController = require('./controllers/MainController');

import TestController from './controllers/TestController';

// Constants
const PORT = 8070;

// App
const app = express();

app.get('/', function (req, res) {

    new MainController();

    new TestController();

    var q = 'test_queue';

    open.then(function(conn) {
        return conn.createChannel();
    }).then(function(ch) {
        return ch.assertQueue(q).then(function(ok) {
            return ch.sendToQueue(q, new Buffer('something to do'));
        });
    }).catch(console.warn);

    res.send('Hello world! I am your Api\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
