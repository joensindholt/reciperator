/// <reference path="typings/tsd.d.ts" />
/// <reference path="repository.ts" />

export class MemberRepository implements Repository.Repository<Model.Member> {
    private id: number;
    private members: {[id:number]:Model.Member; };

    constructor(private db:any) {
        this.id = 1;
        this.members = {
            0: {id: 0, name: 'George', phone: '54627754'},
            1: {id: 1, name: 'Gustav', phone: '65447752'}
        };
    }

    getAll(): Promise<Array<Model.Member>> {
        var promise = new Promise((resolve, reject) => {
            console.log('getting membercollection');
            var collection = this.db.get('membercollection');
            console.log('finding members');
            collection.find({}, {}, (e, members) => {
                console.log('returning members');
                resolve(members);
            });
        });

        return promise;
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
