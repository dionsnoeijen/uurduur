'use strict';

const express = require('express');
const ampq = require('amqplib');

// Constants
const PORT = 8070;

// App
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world! I am your Api\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);