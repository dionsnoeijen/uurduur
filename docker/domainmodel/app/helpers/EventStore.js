import http from 'http';
// Do not import Buffer, it's a Node global

export default class EventStore {

    constructor() {
        this.debug = true;

        // Move this shit away from the contstructor.
        // We have multiple request options
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
        let req = http.request(this.options, res => {
            if (this.debug) {
                console.log(`STATUS: ${res.statusCode}`);
                console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            }
            res.setEncoding('utf8');
            res.on('data', chunk => {
                if (this.debug) {
                    console.log(`BODY: ${chunk}`);
                }
            });
            res.on('end', () => {
                if (this.debug) {
                    console.log('No more data in response.');
                }
            });
        }).on('socket', socket => {
            socket.emit('agentRemove');
        });
        req.on('error', e => {
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

    createProjection(
        name,
        type,
        checkpoints,
        enabled,
        emit,
        trackemittedstreams,
        projection
    ) {

        let path = `/projections/continuous?name=${name}&type=${type}&checkpoints=${checkpoints}&enabled=${enabled}&emit=${emit}&trackemittedstreams=${trackemittedstreams}`;

        console.log(path);

        let postOptions = {
            hostname: 'uurduur_eventstore',
            port: 2113,
            path: path,
            agent: false,
            method: 'POST',
            headers: {
                'Authorization': 'Basic YWRtaW46Y2hhbmdlaXQ=',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(projection)
            }
        };

        console.log(path, postOptions);

        let req = http.request(postOptions, res => {
            if (this.debug) {
                console.log(`STATUS: ${res.statusCode}`);
                console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
            }
            res.setEncoding('utf8');
            res.on('data', chunk => {
                if (this.debug) {
                    console.log(`BODY: ${chunk}`);
                }
            });
            res.on('end', () => {
                if (this.debug) {
                    console.log('No more data in response.');
                }
            });
        });

        req.on('error', e => {
            console.log(`problem with request: ${e.message}`);
        });
        // write data to request body
        req.write(projection);
        req.end();
    }
}
