/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./crud.repository.ts"/>

import Repository = require('./crud.repository');

export class MemberRepository extends Repository.CrudRepository<Model.Member> {
    constructor(db: any) {
        super(db, "members");
    }
}
