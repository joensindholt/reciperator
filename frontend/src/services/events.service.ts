/// <reference path="../../typings/tsd.d.ts"/>

module Services {
    'use strict';

    export class EventsService {

        static $inject = ['$http', '$q'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

        }

        getAll(): ng.IPromise<Array<Model.Event>> {
            var defered = this.$q.defer();

            this.$http.get('http://127.0.0.1:8888/api/events').then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        get(eventId: string): ng.IPromise<Model.Event> {
            var defered = this.$q.defer();

            this.$http.get('http://127.0.0.1:8888/api/events/' + eventId).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        add(event: Model.Event): ng.IPromise<Model.Event> {
            var defered = this.$q.defer();

            this.$http.post('http://127.0.0.1:8888/api/events', event).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        update(event: Model.Event): ng.IPromise<Model.Event> {
            var defered = this.$q.defer();

            this.$http.put('http://127.0.0.1:8888/api/events/' + event._id, event).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        delete(event: Model.Event): ng.IPromise<{}> {
            var defered = this.$q.defer();

            this.$http.delete('http://127.0.0.1:8888/api/events/' + event._id).then((result => {
                defered.resolve();
            }));

            return defered.promise;
        }
    }
}

angular.module('Services')
    .service('EventsService', Services.EventsService);
