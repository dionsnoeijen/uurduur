'use strict';

const open = require('amqplib').connect('amqp://uurduur_rabbitmq');

export default class Subscribe {

    static to(q,c) {
        open.then(function (conn) {
            return conn.createChannel();
        }).then(function (ch) {
            return ch.assertQueue(q).then(function (ok) {
                return ch.consume(q, function (msg) {
                    // return new Promise(function (fulfill, reject){
                    //     if (msg === null) {
                    //         reject(new Error('No message mate'));
                    //     } else {
                    //         fulfill(msg);
                    //     }
                    //     ch.ack(msg);
                    // });

                    c(msg);
                    ch.ack(msg);
                });
            });
        }).catch(console.warn);
    }
}
