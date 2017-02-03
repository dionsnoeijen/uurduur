'use strict';

export default class IndexController
{

    constructor(app) {

        app.get('/', this.indexAction);
    }

    indexAction(req, res) {

        res.send('Hello world! I am your Api\n');
    }
}
