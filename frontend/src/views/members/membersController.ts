/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class MembersController {
        members: Array<any>

        constructor() {
            this.members = [{
                id: 1,
                name: 'George'
            }];
        }
    }
}

angular.module('Views')
    .controller('MembersController', Views.MembersController);
