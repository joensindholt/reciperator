/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./crud.repository.ts"/>

import Repository = require('./crud.repository');

export class TaskRepository extends Repository.CrudRepository<Model.Task> {
    constructor(db: any) {
        super(db, "tasks");
    }
}
