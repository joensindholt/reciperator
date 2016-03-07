/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class UIKitController {

        static $inject = ['$state'];

        constructor(private $state: angular.ui.IStateService) {
        }
    }
}

angular.module('Views')
    .controller('UIKitController', Views.UIKitController);
