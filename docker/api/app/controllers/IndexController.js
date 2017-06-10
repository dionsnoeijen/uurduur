'use strict';

import QuestionnaireSection from '../sections/QuestionnaireSection';
import ContactFormSection from '../sections/ContactFormSection';
import PeopleSection from '../sections/PeopleSection';
import HomeDataSource from '../datasources/HomeDataSource';

export default class IndexController
{
    constructor(app) {
        this.questionnaireSection = QuestionnaireSection.getInstance(app);
        this.contactFormSection = ContactFormSection.getInstance(app);
        this.peopleSection = PeopleSection.getInstance(app);

        this.homeDataSource = HomeDataSource.getInstance(app);
    }
}
