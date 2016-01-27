/// <reference path="model.ts" />

module Repository {
    export interface Repository<T extends Model.Identifiable> {
        getAll(): Promise<Array<T>>;
        create(t: T):T;
        read(id: number):T;
        update(t: T):boolean;
        delete(id: number):boolean;
    }
}
