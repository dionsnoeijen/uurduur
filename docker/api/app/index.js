'use strict';

// @todo I should probably remove the nodemon since it's a watcher. Just like pm2 but different. I can also remove the process.yml files, they are redundant now.

// @todo Check how to use the production / development env_vars ... that aren't in use right now because I'm not using process.yml

// @todo Get travis.ci in the mix and make uurduur deployments a nifty wifty automated thing.

const express = require('express');
const open = require('amqplib').connect('amqp://uurduur_rabbitmq');

import formidable from 'formidable';
import util from 'util';
import uuid from 'uuid';

import AddContainer from './commands/AddContainer';

// Constants
const PORT = 8070;

// App
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/post', function (req, res) {

    let form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {

        res.writeHead(200, {'content-type': 'application/json'});
        if (err === null) {

            const addContainer = AddContainer.create(uuid.v4(), fields.name);
            const q = 'container';

            open.then(function(conn) {
                return conn.createChannel();
            }).then(function(ch) {
                return ch.assertQueue(q).then(function(ok) {

                    return ch.sendToQueue(q, new Buffer(JSON.stringify(addContainer)));
                });
            }).catch(console.warn);

            res.end(util.inspect({fields: fields, files: files, command: JSON.stringify(addContainer)}));
        } else {
            res.end(util.inspect({error: 'error'}));
        }
    });
});

app.get('/', function (req, res) {

    res.send('Hello world! I am your Api\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
