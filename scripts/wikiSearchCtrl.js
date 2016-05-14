angular
	.module('WikipediaSearch')
	.controller('wikiSearchCtrl', wikiSearch)
	.factory('wikiSearchService', [ '$http', '$q', wikiSearchService]);

	function wikiSearch(){
		var self = this;
		this.form = function(){
			console.log('please work');
			return false;
		};
	} 

	function wikiSearchService($http, $q){
		var search = function(term){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&callback=&srsearch=meaning&srprop=snippet|sectiontitle&srlimit=100'
			}).then(function(result){
				deferred.resolve(result.search);
			},function(error){
				alert(error);
			});
			return deferred.promise;
		};
		return {search: search};
	}