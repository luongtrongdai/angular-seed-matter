'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('FinanceController', function() {
		var self = this;
		self.salary = 0;
		self.percentage = 0;
		self.result = function () {
			return self.salary * self.percentage * 0.01;
		};
  	});