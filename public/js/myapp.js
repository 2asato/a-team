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
	                this.getOneEpisode(this.episodes[0]._id)
	            },
	            function(){
	            	
	            })
	}

	this.getOneEpisode = function(id) {
		$http({
	            method:'get',
	            url:'/episodes/' + id,
	        }).then(
	            (response) => {
	                this.data = response.data
	            },
	            function(){
	            	
	            })
	}

	this.getChars = function() {
		$http({
	            method:'get',
	            url:'/characters',
	        }).then(
	            (response) => {
	                this.chars = response.data
	            },
	            function(){
	            	
	            })
	}

	this.formChar ="";
	this.addCharToEp = function (ep) {
		$http({
	            method:'post',
	            url:'/episodes/' + ep + '/' + this.formChar,
	        }).then(
	            (response) => {
	                this.data = response.data
	            },
	            function(){
	            	
	            })
		console.log(this.formChar, ep)
		this.formChar = "";
	}

	this.newEpisodeData;
	this.newEpisode = () => {
		console.log(this.newEpisodeData)
		$http({
	            method:'post',
	            url:'/episodes/',
	            data: this.newEpisodeData
	        }).then(
	            (response) => {
	                console.log(response)
	                this.getEpisodes()
	            },
	            function(){
	            	
	            })
	}

	this.newCharData;
	this.newChar = () => {
		console.log(this.newCharData)
		$http({
	            method:'post',
	            url:'/characters/',
	            data: this.newCharData
	        }).then(
	            (response) => {
	                console.log(response)
	                this.getChars()
	            },
	            function(){
	            	
	            })
	}

	this.deleteEpisode = (id) => {
		$http({
	            method:'delete',
	            url:'/episodes/' + id
	        }).then(
	            (response) => {
	                console.log(response)
	                this.getEpisodes()
	            },
	            function(){
	            	
	            })
	}

	this.getEpisodes()
	this.getChars()



	}])