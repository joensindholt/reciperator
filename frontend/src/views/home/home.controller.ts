/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class HomeController {

        recipes: Array<Model.Recipe>;
        recipeIndex: number;
        jssorOptions: any;

        static $inject = ['$scope', '$state', 'Recipes'];

        constructor(
            private $scope: ng.IScope,
            private $state: angular.ui.IStateService,
            private Recipes: Services.Recipes) {

            this.recipes = this.Recipes.recipes;

            this.jssorOptions = {
                $AutoPlay: false,
                $SlideDuration: 500
            };

            this.$scope.$on('JssorSliderChanged', (event, args) => {
                this.recipeIndex = args.slideIndex;
            });
        }

        addRecipeToWeeklyPlan(day: Model.WeeklyPlanDay) {
            this.Recipes.addRecipeToWeeklyPlan(this.recipes[this.recipeIndex], day);
        }
    }
}

angular.module('Views')
    .controller('HomeController', Views.HomeController);
