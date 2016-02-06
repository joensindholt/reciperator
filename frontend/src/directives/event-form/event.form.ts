/// <reference path="../../../typings/tsd.d.ts"/>

module Directives {

    export class EventFormController {

        form: ng.IFormController;
        submit: () => void;

        static $inject = ['$scope'];
        constructor(private $scope: ng.IScope){
        }

        handleSubmit() {
            if (this.form.$valid) {
                this.submit();
            }
        }
    }

    export function eventForm() {

        return {
            scope: {
                event: '=',
                submit: '&',
                submitText: '@'
            },
            controller: Directives.EventFormController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'partials/directives/event-form/event-form.html',
            restrict: 'E'
        };
    }
}

angular.module('Directives')
    .directive('eventForm', Directives.eventForm);
