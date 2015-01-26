'use strict';

angular.module('postcardEditor').controller('EditorCtrl', ['$scope',
	function($scope){
		console.log('postcardEditorCtrl');

		$scope.settings = {
			rotate: 0,
			flip: 0,
			scale: 1
		};

		$scope.zoomIn = function(){
			$scope.settings.scale += 0.1;
		};

		$scope.zoomOut = function(){
			$scope.settings.scale -= 0.1;
		};

		$scope.rotate = function(){
			$scope.settings.rotate += 45;
		};

		$scope.flip = function(){
			$scope.settings.flip += 180;
		};

	}
]);