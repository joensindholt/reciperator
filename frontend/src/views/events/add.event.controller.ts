/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class AddEventController {

        event: Model.Event;
        form: ng.IFormController;

        static $inject = ['$state', 'EventsService'];

        constructor(
            private $state: angular.ui.IStateService,
            private eventsService: Services.EventsService) {
        }

        addEvent() {
            this.eventsService.add(this.event).then(() => {
                this.$state.go('events');
            });
        }
    }
}

angular.module('Views')
    .controller('AddEventController', Views.AddEventController);
