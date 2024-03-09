angular.module('app', ['ngRoute', 'app.controllers'])


.config(function ($routeProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'pages/page_home.html',
			controller: 'MainController'
		})
		.otherwise({
			redirectTo: '/'
		});
		
});
