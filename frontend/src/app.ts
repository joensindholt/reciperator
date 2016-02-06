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
                templateUrl: "partials/views/members/add.member.html",
                controller: 'AddMemberController',
                controllerAs: 'vm'
            })
            .state('editmember', {
                url: "/editmember/:id",
                params: {
                    id: { value: null }
                },
                templateUrl: "partials/views/members/edit.member.html",
                controller: 'EditMemberController',
                controllerAs: 'vm'
            })
            .state('events', {
                url: "/events",
                templateUrl: "partials/views/events/events.html",
                controller: 'EventsController',
                controllerAs: 'vm'
            })
            .state('addevent', {
                url: "/addevent",
                templateUrl: "partials/views/events/add.event.html",
                controller: 'AddEventController',
                controllerAs: 'vm'
            })
            .state('editevent', {
                url: "/editevent/:id",
                params: {
                    id: { value: null }
                },
                templateUrl: "partials/views/events/edit.event.html",
                controller: 'EditEventController',
                controllerAs: 'vm'
            });
    }

    function Run(): void {

    }
}
