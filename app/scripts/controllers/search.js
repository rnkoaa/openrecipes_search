'use strict';

/**
 * @ngdoc function
 * @name searchRecipesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchRecipesApp
 */
angular.module('searchRecipesApp')
    .controller('searchCtrl', ['$scope', '$location', 'recipeService',
        function($scope, $location, recipeService) {
            var initChoices = [
                'rendang', 'nasi goreng', 'pad thai', 'pizza', 'lasagne', 'ice cream',
                'schnitzel', 'hummous'
            ];

            var idx = Math.floor(Math.random() * initChoices.length);
            $scope.recipes = []; //an array of recipe results to display
            $scope.page = 0; //a counter to keep track of our current page
            $scope.allResults = false; //whether or not all results have been found
            //$scope.searchTerm = $location.search().q || initChoices[idx];

            $scope.query = function() {
                $scope.page = 0;
                $scope.recipes = [];
                $scope.allResults = false;
                /*$scope.search({
                    'q': $scope.searchTerm
                });*/

                console.log($scope.searchTerm);
                $scope.loadMore();
            };

            $scope.loadMore = function() {
                recipeService.search($scope.searchTerm, $scope.page++)
                    .then(function(results) {
                        if (results.length !== 10) {
                            $scope.allResults = true;
                        }

                        var ii = 0;
                        for (; ii < results.length; ii++) {
                            $scope.recipes.push(results[ii]);
                        }
                    });
            };

            // Load results on first run
            $scope.loadMore();
        }
    ]);
