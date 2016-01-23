/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
        'ngRoute'
    ])
        .config(['$stateProvider', Config])
        .run([Run]);

    function Config($stateProvider: angular.ui.IStateProvider): void {

    }

    function Run(): void {

    }
}
