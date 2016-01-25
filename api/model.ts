module Model {

    export interface Identifiable {
        id?: number;
    }

    export interface Member extends Identifiable {
        name: string,
        phone: string
    }
}
