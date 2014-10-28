// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file.
/// <reference path="app1.ts" />
/// <reference path='/Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='/Scripts/typings/angularjs/angular-resource.d.ts'/>

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

// Update the app1 variable name to be that of your module variable
app.controller(HomeController.controllerId, [
    '$scope', '$http', '$resource', function ($scope, $http, $resource) {
        return new HomeController($scope, $http, $resource);
    }
]);
//# sourceMappingURL=HomeController.js.map
