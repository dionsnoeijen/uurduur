import http from 'http';

export default class EventStore {

    constructor() {
        this.debug = false;
        this.options = {
            hostname: 'uurduur_eventstore',
            port: 2113,
            path: '/streams/{stream}',
            agent: false,
            method: 'POST',
            headers: {
                'Content-Type': 'application/vnd.eventstore.events+json'
            }
        };
    }

    writeRequest(events) {

        let req = http.request(this.options, (res) => {
            if (this.debug) {
                console.log(`STATUS: ${res.statusCode}`);
                console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            }
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                if (this.debug) {
                    console.log(`BODY: ${chunk}`);
                }
            });
            res.on('end', () => {
                if (this.debug) {
                    console.log('No more data in response.');
                }
            });
        }).on('socket', (socket) => {
            socket.emit('agentRemove');
        });

        req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
        });

        // write data to request body
        req.write(JSON.stringify(events));
        req.end();
    }

    write(stream, events = []) {
        this.options.path = this.options.path.replace('{stream}', stream);
        this.writeRequest(events);
        this.options.path = this.options.path.replace(stream, '{stream}');
    }

}
