'use strict';

angular.module('postcardEditor', ['ngAnimate', 'ngSanitize', 'restangular', 'ui.router', 'mgcrea.ngStrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainCtrl'
      })
      .state('editor', {
        url: '/editor',
        templateUrl: 'app/pages/editor/editor.html',
        controller: 'EditorCtrl'
      })
      

    $urlRouterProvider.otherwise('/');
  })
;
