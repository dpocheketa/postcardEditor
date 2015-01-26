'use strict';

angular.module('postcardEditor')
  .controller('NavbarCtrl', ['$scope','$state', 
  	function ($scope, $state) {
  
      $scope.pages = [{
      	title: "Home",
      	state: "home"
      }, {
      	title: "Editor",
      	state: 'editor'
      }];
  
      $scope.isActive = function(page){
      	
		return $state.includes(page.state);
      };
  
    }
  ]);
