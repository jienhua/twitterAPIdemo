'use strict'
var Twitter = require('twitter');
var Stream = require('user-stream');
function Twitters(){

	var client = new Twitter({
		consumer_key:'hogvlShsbSbjQlB4iwd5TPmLh',
		consumer_secret: 'sPJITOZwUyAE8HaWqtZFjCazsxU6lrb0ZnWnaDZUP1l1Vjdsik',
		access_token_key: '4006842852-ffiNE7cpwX19tp5OaIUgcpVh7dh2tYfn9QBxY0Z',
		access_token_secret: 'ovqfc5S02PMNh81nlrcltpbdYm4NUxAgaCOzNB8cO74kw'
	});
	
	this.get = function(res){
		client.get('statuses/home_timeline',{count:20, contributor_details: true}, function(error, tweets, response){
			if(error) console.log(error);

	  		res.send(tweets);
	 	});

		// client.stream('statuses/home_timeline',  function(stream){
		//   stream.on('data', function(tweet) {
		//     console.log(tweet.text);
		//   });

		//   stream.on('error', function(error) {
		//     console.log(error);
		//   });
		// });
	};

}

module.exports = new Twitters();