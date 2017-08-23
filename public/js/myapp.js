var app = angular.module('Ateam', []);

app.controller('AteamController', ['$http', function($http){
	this.currentTab = -1;

	this.getEpisodes = function() {
		$http({
	            method:'get',
	            url:'/episodes',
	        }).then(
	            (response) => {
	                this.episodes = response.data
	            },
	            function(){
	            	
	            })
	}

	this.getEpisodes()

	}])