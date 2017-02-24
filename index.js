// index.js

var express = require('express');
var app     = express(); 
var render  = require('./app/routes/render');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var router = express.Router();// get an instance of the express Router
app.use('/api', render);// prefix routes with '/api/'
