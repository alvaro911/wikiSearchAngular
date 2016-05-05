angular.module('WikipediaSearch',[])
	.controller('wikisearchCtrl', wikiSearch);

function wikiSearch(){
	var self = this;
	this.form = function(search){
		console.log('this is working');
		return false;
	};
}
