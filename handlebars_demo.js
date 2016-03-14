//file name: handlebar_demo.js
var express = require('express');

//npm module to integrate handlerbars ui template engine with express
var exphbs = require('express-handlebars');

var app = express();

//declaring express to use handlerbars template engine with main.handlerbar
//as the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	//user hello.handlebars template with the json data passed as another argument
	res.render('hello', {name:'Sanaulla'});
	//res.render('hello');
});

app.listen(9000, function(){
	console.log('server up: ....:9000');
});