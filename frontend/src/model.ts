module Model {

    export interface Identifiable {
        _id?: string;
    }

    export interface Resource extends Identifiable {
        title: string
    }
}
