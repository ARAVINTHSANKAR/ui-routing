angular.module('myApp' , ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/apple");
		
      $stateProvider
          .state('root', {
              abstract: true,
              url:''
          })
          .state('root.apple', {
              url: '/apple',
              templateUrl: 'apple.html',
              onEnter: function(){
                  console.log("apple here");
              }
          }).state('root.apple.banana', {
              url: '/banana',
              templateUrl: 'banana.html',
              onEnter: function(){
                  console.log("banana here");
              }
          });
    });