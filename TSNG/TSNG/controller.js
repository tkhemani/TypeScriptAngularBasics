/// <reference path="scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />

var controller = (function () {
    function controller($scope, $http, $resource) {
        this.$scope = $scope;
        this.$http = $http;
        this.$resource = $resource;
        this.greeting = "Hello";
    }
    controller.prototype.changeGreeting = function () {
        this.greeting = "Bye";
    };
    controller.controllerId = "controller";
    return controller;
})();

app.controller(controller.controllerId, [
    '$scope', '$http', '$resource', function ($scope, $http, $resource) {
        return new controller($scope, $http, $resource);
    }
]);
