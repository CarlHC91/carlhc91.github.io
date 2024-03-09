angular.module('app.services', [])

.factory('MainService', function ($http) {

	return {
		getAlergies: function (callback) {
            $http.get('data/alergies.json').then(function (response) {
                callback(response.data);
            });
        },
		getCategories: function (callback) {
		    $http.get('data/categories.json').then(function (response) {
                callback(response.data);
            });
		},
		getProducts: function (callback) {
		    $http.get('data/products.json').then(function (response) {
                callback(response.data);
            });
        }
	};

});

