'use strict';

import Section from './Section';
import TextInput from '../fieldtypes/TextInput/TextInput';
import RadioButtons from '../fieldtypes/RadioButtons/RadioButtons';
import Relationship from '../fieldtypes/Relationship/Relationship';
import PeopleSection from './PeopleSection';

export default class QuestionnaireSection extends Section {

    constructor(app) {
        super({app:app, name: 'questionnaire'});
        this.addFields();
        this.peopleSection = PeopleSection.getInstance(app);
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
        this.fields.peopleRelation = Relationship.create({
            name: 'peopleRelation',
            value: '',
            label: 'Who do you own',
            to: this.peopleSection
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
        if (QuestionnaireSection.section === undefined) {
            QuestionnaireSection.section = new QuestionnaireSection(app);
        }
        return QuestionnaireSection.section;
    }
}
