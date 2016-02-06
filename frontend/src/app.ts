/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
        // External modules
        'ngRoute',
        'ui.router',
        'ngAnimate',
        'ngMaterial',
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
            })
            .state('editmember', {
                url: "/editmember/:id",
                params: {
                    id: { value: null }
                },
                templateUrl: "partials/views/members/editmember.html",
                controller: 'EditMemberController',
                controllerAs: 'vm'
            });
    }

    function Run(): void {

    }
}
