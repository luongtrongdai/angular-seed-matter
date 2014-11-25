'use strict';

/* Controllers */
angular.module('myApp.controllers', []);


angular.module('myApp.controllers')
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

angular.module('myApp.controllers')
		.controller('TimeoutController', function($scope, $timeout){
			$scope.scheduleTask = function () {
				$timeout(function() {
					$scope.message = "Fetched after 3 seconds";
					console.log('message='+$scope.message);
				}, 3000);
			}
		});

/* Event in action */
angular.module('myApp.controllers')
		.controller('MessageController', function($scope, $timeout){
			$scope.messages = [{
				sender: 'user1'
				, text: "Message 1"
			}];
			var timer;
			var count = 0;
			$scope.loadMessages = function () {
				count++;
				$scope.messages.push({
					sender: "user1"
					, text: "Random message " + count
				});
				timer = $timeout($scope.loadMessages, 2000);
				if (count == 3) {
					$scope.$broadcast('EVENT_NO_DATA', 'Not Conneccted');
					$timeout.cancel(timer);
				}
			};
			timer = $timeout($scope.loadMessages, 2000);
			$scope.$on('EVENT_RECEIVED', function () {
				console.log('Received emitted event');
			});
		});

angular.module('myApp.controllers')
		.controller('StatsController', function ($scope) {
			$scope.name = "World";
			$scope.status = "Connected";
			$scope.statusColor = "green";
			$scope.$on('EVENT_NO_DATA', function (event, data) {
				console.log("received broadcasted event");
				$scope.status = data;
				$scope.statusColor = "red";
				$scope.$emit('EVENT_RECEIVED');
			});
		});

angular.module('myApp.controllers')
		.controller('Controller1', function ($scope, $location, $state) {
			$scope.loadView2 = function () {
				$state.go('view2', {
					firstname: $scope.firstname
					, lastname: $scope.lastname
				});
			};
		});

angular.module('myApp.controllers')
		.controller('Controller2', function ($scope, $stateParams, names) {
			$scope.firstname = $stateParams.firstname;
			$scope.lastname = $stateParams.lastname;
			$scope.names = names;
		});

angular.module('myApp.controllers')
		.controller('TestController', function (helloService) {
			helloService.sayHello('AngularJS');
		});



angular.module('myApp.controllers')
		.controller('WeatherController', function ($scope, weatherService) {
			$scope.getWeather = function () {
				$scope.weatherDescription = "Fetching...";
				weatherService.getWeather($scope.city, $scope.country)
					.then(function (data) {
						$scope.weatherDescription = data;
					}, function () {
						$scope.weatherDescription = "Could not obtain data";
					});
			}
		});
