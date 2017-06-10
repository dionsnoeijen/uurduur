'use strict';

import QuestionnaireSection from '../sections/QuestionnaireSection';
import PeopleSection from '../sections/PeopleSection';
import DataSource from './DataSource';

export default class HomeDataSource extends DataSource {

    constructor(app) {
        super({app:app, name:'home'});
        this.addSections();
    }

    addSections() {
        this.sections.questionnaire = {
            section: QuestionnaireSection.getInstance(this.app),
            limit: 10
        };
        this.sections.people = {
            section: PeopleSection.getInstance(this.app),
            limit: 10
        };
    }

    static getInstance(app) {
        if (HomeDataSource.source === undefined) {
            HomeDataSource.source = new HomeDataSource(app);
        }
        return HomeDataSource.source;
    }
}
