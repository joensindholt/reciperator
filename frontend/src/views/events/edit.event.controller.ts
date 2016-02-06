/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class EditEventController {

        eventId: string;
        event: Model.Event;
        form: ng.IFormController;

        static $inject = ['$state', '$stateParams', 'EventsService'];

        constructor(
            private $state: angular.ui.IStateService,
            private $stateParams: any,
            private eventsService: Services.EventsService) {
                this.eventId = this.$stateParams.id;
                this.eventsService.get(this.eventId).then((event) => {
                    this.event = event;
                });
        }

        updateEvent() {
            this.eventsService.update(this.event).then(() => {
                this.$state.go('events');
            });
        }
    }
}

angular.module('Views')
    .controller('EditEventController', Views.EditEventController);
