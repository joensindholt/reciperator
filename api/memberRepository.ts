/// <reference path="repository.ts" />

export class MemberRepository implements Repository.Repository<Model.Member> {
    private id: number;
    private members: {[id:number]:Model.Member; };

    constructor() {
        this.id = 1;
        this.members = {
            0: {id: 0, name: 'George', phone: '54627754'}
        };
    }

    getAll(): any {
        var obj = this.members;
        var arr = Object.keys(obj).map(function (key) { return obj[key]; });
        return arr;
    }

    create(user:Model.Member) {
        user.id = this.id;
        this.id++;
        this.members[user.id] = user;
        return user;
    }

    read(id:number) {
        return this.members[id];
    }

    update(user:Model.Member) {
        if (this.members[user.id] === null) {
            return false;
        }
        this.members[user.id] = user;
        return true;
    }

    delete(id:number) {
        if (this.members[id] === null) {
            return false;
        }
        this.members[id] = null;
        return true;
    }
}
