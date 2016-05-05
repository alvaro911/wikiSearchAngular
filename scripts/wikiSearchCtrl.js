angular
	.module('WikipediaSearch')
	.controller('wikiSearchCtrl', wikiSearch);

	function wikiSearch(){
		var self = this;
		this.form = function(){
			console.log('please work');
		};
	} 