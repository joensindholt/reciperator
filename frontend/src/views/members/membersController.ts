/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class MembersController {

        members: Array<any>

        static $inject = ['MembersService'];

        constructor(private membersService: Services.MembersService) {
            this.membersService.getAll().then((members) => {
                this.members = members;
            });
        }
    }
}

angular.module('Views')
    .controller('MembersController', Views.MembersController);
