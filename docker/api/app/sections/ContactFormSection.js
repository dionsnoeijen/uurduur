'use strict';

import Section from './Section';
import TextInput from '../fieldtypes/TextInput/TextInput';
import RadioButtons from '../fieldtypes/RadioButtons/RadioButtons';

export default class ContactFormSection extends Section {

    constructor(app) {
        super({app:app, name: 'ContactForm'});
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
            label: 'Infix',
            placeholder: 'Infix'
        });
        this.fields.lastName = TextInput.create({
            name: 'lastName',
            value: '',
            label: 'Your last name?',
            placeholder: 'Last name'
        });
        this.fields.bobby = TextInput.create({
            name: 'bobby',
            value: '',
            label: 'Your?',
            placeholder: 'Bobby'
        });
        this.fields.gender = RadioButtons.create({
            name: 'gender',
            value: 'none',
            label: 'What ist thou gender?',
            options: {
                'none': 'No gender at all',
                'm': 'Male',
                'f': 'Female'
            }
        });
    }

    static getInstance(app) {
        if (ContactFormSection.section === undefined) {
            ContactFormSection.section = new ContactFormSection(app);
        }
        return ContactFormSection.section;
    }
}
