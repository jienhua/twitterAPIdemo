'use strict'

var twitter = require('./models/twitter');

module.exports = {

	configure: function(app){

		app.get('/api/tweets/', function (req, res){
			twitter.get(res);
		});

		app.get('*', function (req, res){
			res.sendfile('./public/index.html');
		});
	}
}