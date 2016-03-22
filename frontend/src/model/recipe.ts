module Model {

    export interface Recipe extends Identifiable {
        title: string;
        imageUrl: string;
        directions: string; // markdown
        ingredients: Array<Ingredient>;
    }

    export interface Ingredient {
        title: string;
        amount: number;
        unit: string; // ml, l, tsk, spsk etc.
    }

    export interface WeeklyPlan {
        days: Array<WeeklyPlanDay>;
        ingredients: Array<Ingredient>;
    }

    export interface WeeklyPlanDay {
        index: number;
        title: string;
        shortDay: string;
        recipe?: Recipe;
    }
}
