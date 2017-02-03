'use strict';

// Constants
const express = require('express');
const PORT = 8070;
const app = express();

// App setup
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Setup for Controllers
import IndexController from './controllers/IndexController';
import ContainerController from './controllers/ContainerController';

new IndexController(app);
new ContainerController(app);

// Go go go!!
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
