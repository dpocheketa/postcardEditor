'use strict';

angular.module('postcardEditor').directive('card', [
	function(){
		return{
			restrict: 'E',
			templateUrl: 'app/shared/directives/card/card.html',
			scope: {
				settings: "="
			},
			link: function(scope, attrs, elem){
				console.log("card");

			}
		}

}]);