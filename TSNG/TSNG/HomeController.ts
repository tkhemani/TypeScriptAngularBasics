/// <reference path="scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />

interface IHomeControllerScope extends ng.IScope {
    vm: HomeController;
}

interface IHomeController {
    greeting: string;
    changeGreeting: () => void;
}

class HomeController implements IHomeController {
    static controllerId: string = "HomeController";
    greeting = "Hello";
    
    constructor(private $scope: IHomeControllerScope, private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
    }

    changeGreeting() {
        this.greeting = "Bye";
    }
}

app.controller(HomeController.controllerId, ['$scope', '$http', '$resource', ($scope, $http, $resource) =>
    new HomeController($scope, $http, $resource)
]);
