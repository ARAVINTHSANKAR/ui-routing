angular.module('testApp', ["ui.router"])
	.config(function($stateProvider , $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home")
		
		$stateProvider
			.state('root', {
				abstract : true,
				url : ''
			})
				
			.state('root.home', {
				url : '/home',
				templateUrl : 'Views/home.html',
				controller : 'homeController'
			})
				
			.state('root.mainPage', {
				url : '/mainPage',
				templateUrl : 'Views/mainPage.html',
				controller : 'mainPageController' 
			});
	});