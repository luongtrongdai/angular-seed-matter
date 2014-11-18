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
