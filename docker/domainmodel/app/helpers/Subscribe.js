'use strict';

const open = require('amqplib').connect('amqp://uurduur_rabbitmq');

export default class Subscribe {

    static to(q,c) {
        open.then(function (conn) {
            return conn.createChannel();
        }).then(function (ch) {
            return ch.assertQueue(q).then(function (ok) {
                return ch.consume(q, function (msg) {
                    c(JSON.parse(msg.content.toString()));
                    ch.ack(msg);
                });
            });
        }).catch(console.warn);
    }
}
