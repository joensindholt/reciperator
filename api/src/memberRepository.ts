/// <reference path="../typings/tsd.d.ts" />
/// <reference path="repository.ts" />

export class MemberRepository implements Repository.Repository<Model.Member> {
    private members: {[id:number]:Model.Member; };

    constructor(private db:any) {
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

    create(member:Model.Member) {
        var promise = new Promise((resolve, reject) => {
            console.log('getting membercollection');
            var collection = this.db.get('membercollection');
            console.log('finding members');
            collection.insert(member, function (err, doc) {
              if (err) throw err;
              resolve(doc);
            });
        });

        return promise;
    }

    read(id:number): Promise<Model.Member> {
        var promise = new Promise((resolve, reject) => {
            console.log('getting membercollection');
            var collection = this.db.get('membercollection');
            console.log('getting member by id: ' + id);
            collection.findById(id, function (err, doc) {
              if (err) throw err;
              resolve(doc);
            });
        });

        return promise;
    }

    update(member:Model.Member) {
        var promise = new Promise((resolve, reject) => {
            console.log('getting membercollection');
            var collection = this.db.get('membercollection');
            console.log('updating member', member);
            collection.update({_id: member._id}, member, function (err, doc) {
              if (err) throw err;
              console.log('returning updated doc');
              resolve(doc);
            });
        });

        return promise;
    }

    delete(id:number): Promise<{}>  {
        var promise = new Promise((resolve, reject) => {
            var collection = this.db.get('membercollection');
            console.log('deleting member by id', id);
            collection.remove({_id: id}, function (err, doc) {
              if (err) throw err;
              console.log('returning updated doc');
              resolve(doc);
            });
        });

        return promise;
    }
}
