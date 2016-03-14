'use strict'

angular.module('tService', [])
	
	//this file send request to the back end from angular

	.factory('Twitter', ['$http', function ($http){
		return {
			get:function(){
				return $http.get('/api/tweets');
			}
		}
	}]);