'use strict';

angular.module('postcardEditor').controller('EditorCtrl', ['$scope',
	function($scope){
		console.log('postcardEditorCtrl');

		$scope.settings = {
			rotate: 90,
			flip: 90,
			scale: 0.2
		};

	}
]);