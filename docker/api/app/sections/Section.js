'use strict';

import formidable from 'formidable';
import Queue from '../helpers/Queue';
import SaveSection from '../commands/SaveSection';
import util from 'util';
import fs from 'fs';

export default class Section {

    constructor({app, name} = {}) {
        this.name = name;
        this.fields = {};
        this.saveAction = '/' + this.name + '/save';
        app.get('/' + this.name + '/form', this.getForm.bind(this));
        app.post(this.saveAction, this.save.bind(this));
    }

    save(req, res) {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            res.writeHead(200, {'content-type': 'application/json'});
            if (err === null) {
                const command = SaveSection.create(this);
                Queue.now(this.getName(), command);
                return res.end(util.inspect({
                    fields: fields,
                    files: files,
                    command: JSON.stringify(command)
                }));
            } else {
                return res.end(util.inspect({
                    error: err
                }));
            }
        });
    }

    getName() {
        return this.name;
    }

    getFields() {
        return this.fields;
    }

    getForm(req, res) {
        res.writeHead(200, {'content-type': 'application/json'});
        let template = fs.readFileSync(__dirname + '/../fieldtypes/FieldType/template/form.html', 'utf8');
        let fields = '';
        for (let field in this.getFields()) {
            if (this.fields.hasOwnProperty(field)) {
                fields += this.fields[field].getTemplate();
            }
        }
        template = template
            .replace(/{{ section }}/g, this.name)
            .replace(/{{ fields }}/g, fields)
            .replace(/{{ action }}/g, 'http://localhost:8070' + this.saveAction)
            .replace(/\n/g, '');
        return res.end(
            JSON.stringify({
                form: template
            })
        );
    }
}
