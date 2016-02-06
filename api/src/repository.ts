/// <reference path="model.ts" />

module Repository {
    export interface Repository<T extends Model.Identifiable> {
        getAll(): Promise<Array<T>>;
        create(t: T): Promise<T>;
        read(id: number): Promise<T>;
        update(t: T): Promise<T>;
        delete(id: number): Promise<{}>;
    }
}
