/// <reference path="../../typings/tsd.d.ts"/>

module Services {
    'use strict';

    export class MembersService {

        static $inject = ['$http', '$q'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

        }

        getAll(): ng.IPromise<Array<Model.Member>> {
            var defered = this.$q.defer();

            this.$http.get('http://127.0.0.1:8888/api/members').then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        get(memberId: string): ng.IPromise<Model.Member> {
            var defered = this.$q.defer();

            this.$http.get('http://127.0.0.1:8888/api/members/' + memberId).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        add(member: Model.Member): ng.IPromise<Model.Member> {
            var defered = this.$q.defer();

            this.$http.post('http://127.0.0.1:8888/api/members', member).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        update(member: Model.Member): ng.IPromise<Model.Member> {
            var defered = this.$q.defer();

            this.$http.put('http://127.0.0.1:8888/api/members/' + member._id, member).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        delete(member: Model.Member): ng.IPromise<{}> {
            var defered = this.$q.defer();

            this.$http.delete('http://127.0.0.1:8888/api/members/' + member._id).then((result => {
                defered.resolve();
            }));

            return defered.promise;
        }
    }
}

angular.module('Services')
    .service('MembersService', Services.MembersService);
