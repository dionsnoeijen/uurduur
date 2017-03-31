'use strict';

import QuestionnaireSection from '../sections/QuestionnaireSection'

export default class IndexController
{
    constructor(app) {
        this.questionnaireSection = QuestionnaireSection.getInstance(app);
    }
}
