angular.module('testApp')
.controller('mainPageController', function($scope) {
	$scope.mainSample = function mainsample() {
		alert("i'm from mainPage sample");
	}
});