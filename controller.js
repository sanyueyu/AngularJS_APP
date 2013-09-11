/**
 * Created with JetBrains WebStorm.
 * User: zhu
 * Date: 13-9-11
 * Time: 下午3:42
 * To change this template use File | Settings | File Templates.
 */
var myAppModule = angular.module("myApp", []);

myAppModule.factory("Items", function () {
    var items = {};
    items.query = function () {
        return [
            {
                title: 'paint pots', quantity: 8, price: 3.95, sum: 0
            }
            ,
            {
                title: 'paint pots', quantity: 17, price: 12.9, sum: 0
            }
            ,
            {
                title: 'patine', quantity: 5, price: 4, sum: 0
            }
        ];
    };
    return items;
});
myAppModule.filter('titleCase', function () {
    var titleCaseFilter = function (input) {
        var words = input.split(' ');
        for (var i = 0, len = words.length; i < len; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };
    return titleCaseFilter;
});
myAppModule.controller("CartController", function ($scope, Items) {
    $scope.isDisabled = false;
    $scope.title = {};
    $scope.title.show = true;
    $scope.title.disabled = true;
    $scope.bill = {};
    $scope.items = Items.query();
    $scope.changeColor = function (index) {
        $scope.isSelected = index;
    };
    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    };
    $scope.compute = function (index) {
        $scope.items[index].sum = $scope.items[index].quantity * $scope.items[index].price;
    };
    $scope.toggle = function () {
        $scope.title.show = !$scope.title.show;
    };
    $scope.stun = function () {
        $scope.isDisabled = true;
    };

    function calculate() {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total += $scope.items[i].price * $scope.items[i].quantity;
        }
        $scope.bill.total = total;
        $scope.bill.discount = total > 100 ? 10 : 0;
        $scope.bill.subTotal = total - $scope.bill.discount;
    }

    $scope.$watch("items", calculate, true);
});

myAppModule.controller("AddUserController", function($scope) {
    $scope.message = "";
    $scope.addUser = function() {};
});