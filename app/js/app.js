'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers']);

angular.module('myApp').run(function($rootScope){
	$rootScope.title = "Timeout controller";
	$rootScope.name = "Root Scrope";
});
