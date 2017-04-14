'use strict';

import Section from './Section';
import TextInput from '../fieldtypes/TextInput/TextInput'

export default class QuestionnaireSection extends Section {

    constructor(app) {
        super({app:app, name: 'questionnaire'});
        this.addFields();
    }

    addFields() {
        this.fields.firstName = TextInput.create({
            name: 'firstName',
            value: '',
            label: 'Your first name?',
            placeholder: 'First name'
        });
        this.fields.infix = TextInput.create({
            name: 'infix',
            value: '',
            label: 'Does thou has infix?',
            placeholder: 'Infix'
        });
        this.fields.lastName = TextInput.create({
            name: 'lastName',
            value: '',
            label: 'Your last name?',
            placeholder: 'Last name'
        });
    }

    static getInstance(app) {
        if (QuestionnaireSection.section === undefined) {
            QuestionnaireSection.section = new QuestionnaireSection(app);
        }
        return QuestionnaireSection.section;
    }
}
