'use strict';

/**
 * @ngdoc overview
 * @name searchRecipesApp
 * @description
 * # searchRecipesApp
 *
 * Main module of the application.
 */
angular
    .module('searchRecipesApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'elasticsearch'
    ])
    .config(function($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .state('search', {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'searchCtrl'
            });
    });
