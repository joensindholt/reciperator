/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./crud.repository.ts"/>

import Repository = require('./crud.repository');

export class EventRepository extends Repository.CrudRepository<Model.Event> {
    constructor(db: any) {
        super(db, "events");
    }
}
