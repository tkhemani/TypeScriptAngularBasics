/// <reference path="scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />

// Create the module and define its dependencies.
var app = angular.module('app', [
    'ngResource',
    'ngAnimate',
    'ngRoute'
]);

// Execute bootstrapping code and any dependencies.
app.run([
    '$q', '$rootScope', function ($q, $rootScope) {
    }]);
//# sourceMappingURL=app.js.map
