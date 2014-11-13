'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
		.controller('SiteController', function($scope){
			$scope.publisher = "SitePoint";
			$scope.type = "Web Development";
			$scope.name = "Scope for SiteController";
		});

angular.module('myApp.controllers')
		.controller('BookController', function($scope){
			$scope.wishListCount = 0;
			$scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
			$scope.name = 'Scope for BookController';

			$scope.addToWishList = function (book) {
				$scope.wishListCount++;
			}
			var unbindWatcher = $scope.$watch('wishListCount', function(newValue, oldValue) {
				console.log('Called ' + newValue + ' times.');
				if (newValue % 2 == 0) {
					alert('Great! You have 2 items in you wish list. Time to buy what you love.');
					unbindWatcher();
				}
			});

		});

angular.module('myApp.controllers', [])
		.controller('TimeoutController', function($scope, $timeout){
			$scope.scheduleTask = function () {
				$timeout(function() {
					$scope.message = "Fetched after 3 seconds";
					console.log('message='+$scope.message);
				}, 3000);
			}
		});
