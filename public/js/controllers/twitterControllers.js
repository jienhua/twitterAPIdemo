'use strict'

angular.module('tController', [])

	//inject the twitter service factory into our twitterController
	.controller('twitterController', ['$scope', '$http','Twitter', function ($scope, $http, Twitter){

		$scope.name = 'test';
		

		$scope.reloadTweet = function(){
			Twitter.get()
				.success(function (data){
					$scope.tweets = data;
				});
		}
		//$scope.imgSwitch = true;
		$scope.correctTimestring = function(string){
			return new Date(Date.parse(string));
		};
	}]);