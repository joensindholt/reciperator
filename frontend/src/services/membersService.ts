/// <reference path="../../typings/tsd.d.ts"/>

module Services {
    'use strict';

    export class MembersService {

        static $inject = ['$http', '$q'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

        }

        getAll = (): ng.IPromise<Array<any>> => {
            var defered = this.$q.defer();

            this.$http.get('http://127.0.0.1:8888/api/members').then((result => {
                console.log('got members from server', result.data);
                defered.resolve(result.data);
            })).catch((err) => {
                console.error('Error getting members: %s', err);
            });

            return defered.promise;
        }
    }
}

angular.module('Services')
    .service('MembersService', Services.MembersService);
