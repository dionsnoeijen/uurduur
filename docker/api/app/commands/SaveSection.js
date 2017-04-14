'use strict';

export default class SaveSection {

    constructor({name, fields = {}} = {}) {
        this.name = name;
        for (let field in fields) {
            if (fields.hasOwnProperty(field)) {
                this[field] = fields[field].getValue();
            }
        }
    }

    static create(section) {
        return new SaveSection({
            name: section.getName(),
            fields: section.getFields()
        });
    }
}
