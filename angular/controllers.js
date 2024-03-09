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

    $scope.setCategory = function (id) {
        $scope.selected_category = id;

        MainService.getProducts(function (response) {
            $scope.products = response.filter(function (item) {
                return id == null || id == item.category;
            });
        });
    };
});

