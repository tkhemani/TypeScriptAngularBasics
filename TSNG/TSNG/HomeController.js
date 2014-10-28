/// <reference path="scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />

var HomeController = (function () {
    function HomeController($scope, $http, $resource) {
        this.$scope = $scope;
        this.$http = $http;
        this.$resource = $resource;
        this.greeting = "Hello";
    }
    HomeController.prototype.changeGreeting = function () {
        this.greeting = "Bye";
    };
    HomeController.controllerId = "HomeController";
    return HomeController;
})();

app.controller(HomeController.controllerId, [
    '$scope', '$http', '$resource', function ($scope, $http, $resource) {
        return new HomeController($scope, $http, $resource);
    }
]);
//# sourceMappingURL=HomeController.js.map
