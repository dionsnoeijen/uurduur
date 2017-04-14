'use strict';

export default class TemplateParser {

    static replaceVars(template, ...vars) {

        console.log('VARS:', vars);
        // fs.readFileSync(template, 'utf8')
        //     .replace(/{{ name }}/g, this.name)
        //     .replace(/{{ value }}/g, this.value)
        //     .replace(/{{ label }}/g, this.label)
        //     .replace(/{{ placeholder }}/g, this.placeholder);
    }
}
