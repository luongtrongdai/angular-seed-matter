'use strict';

/* Services */
angular.module('myApp.services', []);

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
		.service('helloService', function ($timeout) {
			this.sayHello = function (name) {
				$timeout(function () {
					alert('Hello! ' + name);
				}, 2000);
			}
		});


angular.module('myApp.services')
		.factory('weatherService', function ($http) {
			return {
				getWeather: function (city, country) {
					var query = city + ',' + country;
					return $http.get('http://api.openweathermap.org/data/2.5/weather', {
						params: {
							q: query
						}
						, cache: true
					}).then(function (response) {
						return response.data.weather[0].description;
					});
				}
			}
		});

