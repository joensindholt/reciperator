/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
        // External modules
        'ngRoute',
        'ui.router',
        'matchMedia',
        // App modules
        'Directives',
        'Services',
        'Views'
    ])
    .config(['$stateProvider', Config])
    .run([Run]);

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
