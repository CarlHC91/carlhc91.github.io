angular.module('app.controllers', ['app.services'])


.controller('MainController', function ($scope, MainService) {

    MainService.getAlergies(function (response) {
        $scope.alergies = response;
    });

    MainService.getCategories(function (response) {
        $scope.categories = response;
    });

    MainService.getProducts(function (response) {
         $scope.products = response;
    });

    $scope.selected_category = null;

    $scope.setCategory = function (value) {
        $scope.selected_category = value;
    };

    $scope.selected_language = 'es';

    $scope.setLanguage = function (value) {
        $scope.selected_language = value;
    };

});

