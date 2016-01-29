/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class AddMemberController {

        master: any;
        form: ng.IFormController;

        static $inject = ['MembersService'];

        constructor(private membersService: Services.MembersService) {
        }

        addPlayer(player: any) {
            this.master = angular.copy(player);
            console.log(this.master);

            if (this.form.$valid) {
                console.log('adding player');
                this.membersService.add(player);
            }
        }
    }
}

angular.module('Views')
    .controller('AddMemberController', Views.AddMemberController);
