'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 9000; //set the port
var routes = require('./app/routes');

var morgan = require('morgan');
var methodOverride = require('method-override');

//set the static file location /public img with be /img of user
app.use(express.static(__dirname + '/public'));
//log every request to the console
app.use(morgan('dev'));
//parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application /json
app.use(bodyParser.json());
//parse application/vnd.api+json as json
app.use(bodyParser.json({type:'application/vnd.api+json'}));
//override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'));

//routes=============================
routes.configure(app);

//listen (start app the node server.js)
app.listen(port);

console.log('App listening on port: ' + port);