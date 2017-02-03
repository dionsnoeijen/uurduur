'use strict';

import formidable from 'formidable';
import util from 'util';
import uuid from 'uuid';
import AddContainer from '../commands/AddContainer';
import Queue from '../helpers/Queue';

export default class ContainerController {

    constructor(app) {

        app.post('/container/add', this.containerAddAction);
    }

    containerAddAction(req, res) {

        let form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'application/json'});

            if (err === null) {
                const addContainer = AddContainer.create(uuid.v4(), fields.name);
                Queue.now('container', addContainer);
                res.end(
                    util.inspect({
                        fields: fields,
                        files: files,
                        command: JSON.stringify(addContainer)
                    })
                );
            } else {
                res.end(
                    util.inspect({
                        error: 'error'
                    })
                );
            }
        });
    }
}
