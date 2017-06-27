// index.js

var express    = require('express');
var app        = express(); 
var render     = require('./app/routes/render');
var bodyParser = require('body-parser');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var router = express.Router();// get an instance of the express Router
app.use('/api', render);// prefix routes with '/api/'

// Start server
var port = process.env.PORT || 3000;
app.listen(port);