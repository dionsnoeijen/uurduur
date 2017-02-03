'use strict';

const open = require('amqplib').connect('amqp://uurduur_rabbitmq');

export default class Queue {

    static now(queue, data) {

        open.then(function(conn) {
            return conn.createChannel();
        }).then(function(ch) {
            return ch.assertQueue(queue).then(function(ok) {
                console.log(ok);
                return ch.sendToQueue(queue, new Buffer(JSON.stringify(data)));
            });
        }).catch(console.warn);
    }
}
