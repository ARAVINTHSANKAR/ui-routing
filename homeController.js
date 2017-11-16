angular.module('testApp')
.controller('homeController', function ($scope,$state) {
	$scope.sample = function sample() {
		alert("i'm from sample function");
		$state.go('root.mainPage');
	} 
	});