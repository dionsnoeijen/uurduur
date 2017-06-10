'use strict';

import Queue from '../helpers/Queue';
import CreateProjection from '../commands/CreateProjection';
import util from 'util';

export default class DataSource {

    constructor({app, name} = {}) {
        this.name = name;
        this.app = app;
        this.sections = {};
        app.get('/datasource/' + this.name + '/init', this.initProjection.bind(this));
    }

    getEventName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1) + 'SectionSaved';
    }

    getHandlerName(eventName) {
        return eventName.charAt(0).toLowerCase() + eventName.slice(1) + 'Handler';
    }

    getHandlers() {
        let handlers = [];

        Object.keys(this.sections).forEach(key => {
            let name = this.sections[key].section.getName();
            let handler = this.getHandlerName(this.getEventName(name));

            handlers.push(
`
function ${handler}(state, event) {
    state.section.${name}.push(event.data);
    
    return state;
}
`
            );
        });

        return handlers.join('');
    }

    getListeners() {
        let listeners = [];
        Object.keys(this.sections).forEach(key => {
            let name = this.sections[key].section.getName();
            let listenTo = this.getEventName(name);
            let handler = this.getHandlerName(listenTo);
            listeners.push(`case '${listenTo}': return ${handler}(state, event);`);
        });

        return listeners.join(
`
                `
        );
    }

    getInitialState() {
        let state = [];
        Object.keys(this.sections).forEach(key => {
            let name = this.sections[key].section.getName();
            state.push(`${name}:[]`);
        });

        state = state.join(
`,
                    `
        );

        return `{
                section: {
                    ${state}
                }
            }`
        ;
    }

    initProjection(req, res) {
        res.writeHead(200, {'content-type': 'application/json'});

        let projection = this.build();
        let command = CreateProjection.create(this.name, projection);

        Queue.now('create-projection', command);

        return res.end(util.inspect({
            command: JSON.stringify(command)
        }));
    }

    build() {
        return `fromAll()
    .when({
        $init: function(state, event) {
            return ${this.getInitialState()};
        },
        $any: function(state, event) {
            switch (event.eventType) {
                ${this.getListeners()}
            }
            
            return state;
        }
    });
${this.getHandlers()}
`
        ;
    }
}
