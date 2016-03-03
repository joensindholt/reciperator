/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
        // External modules
        'ngRoute',
        'ui.router',
        'matchMedia',
        // App modules
        'Views',
        'Components',
        'Services'
    ])
    .config(['$stateProvider', Config])
    .run([Run]);

    // Init sub modules
    angular.module('Views', []);
    angular.module('Components', []);
    angular.module('Services', []);

    function Config($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider
            .state('home', {
                url: "",
                templateUrl: "partials/home/home.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }


    function Run(): void {

    }
}
