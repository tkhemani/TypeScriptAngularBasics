// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file.
/// <reference path="app1.ts" />
/// <reference path='/Scripts/typings/angularjs/angular.d.ts'/>
/// <reference path='/Scripts/typings/angularjs/angular-resource.d.ts'/>

interface IHomeControllerScope extends ng.IScope {
    vm: HomeController;
}

interface IHomeController {
    greeting: string;
    controllerId: string;
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

// Update the app1 variable name to be that of your module variable
app.controller(HomeController.controllerId, ['$scope', '$http', '$resource', ($scope, $http, $resource) =>
    new HomeController($scope, $http, $resource)
]);
