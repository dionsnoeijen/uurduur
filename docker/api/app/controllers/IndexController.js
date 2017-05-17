'use strict';

import QuestionnaireSection from '../sections/QuestionnaireSection';
import ContactFormSection from '../sections/ContactFormSection';

export default class IndexController
{
    constructor(app) {
        this.questionnaireSection = QuestionnaireSection.getInstance(app);
        this.contactFormSection = ContactFormSection.getInstance(app);
    }
}
