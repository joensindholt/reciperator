/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'Views'
    ])
        .config(['$stateProvider', Config])
        .run([Run]);

    function Config($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider.
            state('members', {
            url: "/members",
            templateUrl: "partials/views/members/members.html",
            controller: 'MembersController',
            controllerAs: 'vm'
        });
    }

    function Run(): void {

    }
}
