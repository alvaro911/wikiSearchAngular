angular
	.module('WikipediaSearch')
	.factory('wikiSearchService', [ '$http', '$q', wikiSearchService])
	.controller('wikiSearchCtrl', ['wikiSearchService', wikiSearch]);

	function wikiSearch(search){
		var self = this;
		this.form = function(term){
			search(term).then(function(result){
				self.results = result;
			});
			return false;
		};
	} 

	function wikiSearchService($http, $q){

		var search = function(term){
			var deferred = $q.defer(),
			url = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + term + '&callback=JSON_CALLBACK';

			$http.jsonp(url)
				.success(function(result){
					console.log('Result = ', result);
					deferred.resolve(result.query.pages);
				})
				.error(function(error){
					console.log(error);
				});
			return deferred.promise;
		};

		return search;
	}