/// <reference path="../../typings/tsd.d.ts"/>

declare var Qty: any;

module Services {
    'use strict';

    export class Recipes {

        private _recipes: Array<Model.Recipe>;

        private _weeklyPlan: Model.WeeklyPlan;

        constructor() {

            this._weeklyPlan = {
                days: [
                    { index: 0, title: 'Lørdag', shortDay: 'Lør' },
                    { index: 1, title: 'Søndag', shortDay: 'Søn' },
                    { index: 2, title: 'Mandag', shortDay: 'Man' },
                    { index: 3, title: 'Tirsdag', shortDay: 'Tir' },
                    { index: 4, title: 'Onsdag', shortDay: 'Ons' },
                    { index: 5, title: 'Torsdag', shortDay: 'Tor' },
                    { index: 6, title: 'Fredag', shortDay: 'Fre' }
                ],
                ingredients: []
            };

            // Move to api
            this._recipes = [{
                title: 'Brændende kærlighed',
                imageUrl: 'http://www.mfyp.dk/ungogsund/images/Brandendekarlighed.jpg',
                directions: 'This is how you do it',
                ingredients: [{
                    title: 'Kartofler',
                    amount: 400,
                    unit: 'g'
                }, {
                        title: 'Bacon',
                        amount: 200,
                        unit: 'g'
                    }, {
                        title: 'Skinke i tern',
                        amount: 300,
                        unit: 'g'
                    }]
            }, {
                    title: 'Hakkebøf m. løg',
                    imageUrl: 'https://i.ytimg.com/vi/zvhPPvLpEaA/maxresdefault.jpg',
                    directions: 'Steg koen',
                    ingredients: [{
                        title: 'Oksekød',
                        amount: 500,
                        unit: 'g'
                    }, {
                            title: 'Løg',
                            amount: 2,
                            unit: 'stk'
                        }]
                }, {
                    title: 'Lam m. rodfrugtmos',
                    imageUrl: 'http://www.udeoghjemme.dk/sites/udeoghjemme.dk/files/styles/full_height_8grid/public/media/c61bb70dc7ba42e29fe9b3b1efd4be55.jpg?itok=kqc-HmX9',
                    directions: 'Bland det hele',
                    ingredients: [{
                        title: 'Lam',
                        amount: 500,
                        unit: 'g'
                    }, {
                            title: 'Gulerødder',
                            amount: 3,
                            unit: 'stk'
                        }]
                }];
        }

        public get recipes(): Array<Model.Recipe> {
            return this._recipes;
        }

        public get weeklyPlan(): Model.WeeklyPlan {
            return this._weeklyPlan;
        }

        public addRecipeToWeeklyPlan(recipe: Model.Recipe, day: Model.WeeklyPlanDay) {
            console.log('recipe', recipe);
            console.log('day', day);
            this._weeklyPlan.days[day.index].recipe = recipe;
            this.addIngredientsToWeeklyPlan(recipe);
        }

        private addIngredientsToWeeklyPlan(recipe: Model.Recipe) {
            _.each(recipe.ingredients, ingredient => {
                // look for ingredient in list
                var existing = _.find(this.weeklyPlan.ingredients, i => {
                    return i.title === ingredient.title;
                });

                if (existing) {
                    // try to parse the existing quantity
                    var existingQuantity = Qty.parse(existing.amount + ' ' + existing.unit);

                    if (existingQuantity) {
                        // ...if it succeeded - add using units
                        var newQuantity = new Qty(ingredient.amount + ' ' + ingredient.unit);
                        var newExistingQuantity = existingQuantity.add(newQuantity);
                        existing.amount = newExistingQuantity.scalar;
                        existing.unit = newExistingQuantity._units;
                    }
                    else {
                        //...if not - do unitless addition
                        existing.amount = existing.amount + ingredient.amount;
                    }
                }
                else {
                    this._weeklyPlan.ingredients.push({
                        title: ingredient.title,
                        amount: ingredient.amount,
                        unit: ingredient.unit
                    });
                }
            });
        }
    }
}

angular.module('Services')
    .service('Recipes', Services.Recipes);
