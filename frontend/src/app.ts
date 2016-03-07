/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
    // External modules
        'ngRoute',
        'ui.router',
        'matchMedia',
        'hljs',
    // App modules
        'Views',
        'Components',
        'Services'
    ])
        .config(['$stateProvider', 'hljsServiceProvider', Config])
        .run([Run]);

    // Init sub modules
    angular.module('Views', []);
    angular.module('Components', []);
    angular.module('Services', []);

    function Config($stateProvider: angular.ui.IStateProvider, hljsServiceProvider): void {
        $stateProvider
            .state('home', {
            url: "",
            templateUrl: "partials/home/home.html",
            controller: 'HomeController',
            controllerAs: 'vm'
        })
            .state('ui-kit', {
            url: "/ui-kit",
            templateUrl: "partials/ui-kit/ui-kit.html",
            controller: 'UIKitController',
            controllerAs: 'vm'
        });

        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    }


    function Run(): void {

    }
}
