module Model {

    export interface Identifiable {
        _id?: string;
    }

    export interface Member extends Identifiable {
        name: string,
        email: string,
        phone: string,
        address: string,
        postalCode: string,
        city: string
    }
}
