'use strict';

const express = require('express');
const ampq = require('amqplib');

// Constants
const PORT = 8090;

// App
const app = express();

app.get('/', function (req, res) {

    res.send('Hello world! I am your domain model, you know\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
