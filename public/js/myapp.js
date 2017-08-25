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
	                this.editEpisodeData = this.data
	                this.getCharsForEp()
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
	                this.getCharsForEp()
	            },
	            function(){
	            	
	            })
		console.log(this.formChar, ep)
		this.formChar = "";
	}

	this.formCharRemove ="";
	this.removeCharToEp = function (ep) {
		$http({
	            method:'post',
	            url:'/episodes/remove/' + ep + '/' + this.formCharRemove,
	        }).then(
	            (response) => {
	                this.data = response.data
	                this.getCharsForEp()
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
	                this.newEpisodeData = {};
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
	                this.newCharData = {};
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

	this.parse = (string) => {
		this.editChar = JSON.parse(string)
	}

	this.editEpisode = (id) => {
		$http({
	            method:'put',
	            url:'/episodes/' + id,
	            data: this.editEpisodeData
	        }).then(
	            (response) => {
	                console.log(response)
	                this.getEpisodes()
	            },
	            function(){
	            	
	            })
	}

	this.editCharacter = (id) => {
		$http({
	            method:'put',
	            url:'/characters/' + id,
	            data: this.editChar
	        }).then(
	            (response) => {
	                console.log(response)
	                this.getChars()
	                this.getCharsForEp()
	            },
	            function(){
	            	
	            })
	}

	this.toggleSort = function() {
		if(this.sorter === "title") {
			this.sorter = "episodeNumOverall"
		}
		else {
			this.sorter = "title"
		}
	}

	this.getCharsForEp = () => {
		$http({
	            method:'post',
	            url:'/characters/episode',
	            data: {chars: this.data.characters}
	        }).then(
	            (response) => {
	                console.log(response)
	                this.data.characters = response.data
	            },
	            function(){
	            	
	            })
	}

	this.deleteChar = (id) => {
		$http({
	            method:'delete',
	            url:'/characters/' + id
	        }).then(
	            (response) => {
	                console.log(response)
	                this.editChar = {}
	                this.getChars()
	            },
	            function(){
	            	
	            })
	}

	this.sorter = "episodeNumOverall"
	this.editChar = {};
	this.tab = 1;
	this.getEpisodes()
	this.getChars()



	}])