'use strict';

angular.module('postcardEditor').controller('EditorCtrl', ['$scope', '$modal',
	function($scope, $modal){
		console.log('postcardEditorCtrl');

		var myModal = $modal({
				title: 'Text block adding',
				scope: $scope,
				backdrop: true,
				contentTemplate: 'components/modal/modal.html',
				show: false,
			});

		$scope.settings = {
			rotate: 0,
			flip: 0,
			scale: 1,
			text: {
				left: [],
				right: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error molestias soluta pariatur ab perspiciatis, est, quidem temporibus dolores nulla laudantium omnis facere explicabo, eius sit deserunt, aperiam exercitationem. Sint, enim."],
				center: []
			}
		};

		$scope.modal = {
			textParent: null,
			newText: ""
		};

		$scope.zoomIn = function(){
			if ($scope.settings.scale <= 1.5) {
				$scope.settings.scale += 0.1;
			};
		};

		$scope.zoomOut = function(){
			if ($scope.settings.scale >= 0.5) {
				$scope.settings.scale -= 0.1;
			};
		};

		$scope.rotate = function(){
			$scope.settings.rotate += 45;
		};

		$scope.flip = function(){
			$scope.settings.flip += 180;
		};

		$scope.addText = function(){
			myModal.$promise.then(myModal.show);
		};

		$scope.addTextTo = function(part){
			var newText = $scope.modal.newText;

			$scope.settings.text[part].push(newText);

			$scope.modal.newText = '';
			$scope.modal.textParent = null;
		};
	}
]);