/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'Views',
        'Services'
    ])
        .config(['$stateProvider', Config])
        .run([Run]);

    function Config($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider
            .state('members', {
                url: "/members",
                templateUrl: "partials/views/members/members.html",
                controller: 'MembersController',
                controllerAs: 'vm'
            })
            .state('addmember', {
                url: "/addmember",
                templateUrl: "partials/views/members/addmember.html",
                controller: 'AddMemberController',
                controllerAs: 'vm'
            });
    }

    function Run(): void {

    }
}
