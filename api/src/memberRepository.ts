/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./crud.repository.ts"/>

export class MemberRepository extends Repository.CrudRepository<Model.Member> {
    constructor(db: any) {
        super(db, "membercollection");
    }
}
