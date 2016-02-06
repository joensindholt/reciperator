/// <reference path="../typings/tsd.d.ts" />
/// <reference path="repository.ts" />

module Repository {
    export class CrudRepository<T extends Model.Identifiable> implements Repository.Repository<T> {
        constructor(private db: any, private collection: string) {

        }

        getAll = (): Promise<Array<T>> => {
            var promise = new Promise((resolve, reject) => {
                var collection = this.db.get(this.collection);
                collection.find({}, {}, (e, resources) => {
                    resolve(resources);
                });
            });

            return promise;
        }

        create = (resource: T) => {
            var promise = new Promise((resolve, reject) => {
                var collection = this.db.get(this.collection);
                collection.insert(resource, function(err, doc) {
                    if (err) throw err;
                    resolve(doc);
                });
            });

            return promise;
        }

        read = (id: number): Promise<T> => {
            var promise = new Promise((resolve, reject) => {
                var collection = this.db.get(this.collection);
                collection.findById(id, function(err, doc) {
                    if (err) throw err;
                    resolve(doc);
                });
            });

            return promise;
        }

        update = (resource: T) => {
            var promise = new Promise((resolve, reject) => {
                var collection = this.db.get(this.collection);
                collection.update({ _id: resource._id }, resource, function(err, doc) {
                    if (err) throw err;
                    resolve(doc);
                });
            });

            return promise;
        }

        delete = (id: number): Promise<{}> => {
            var promise = new Promise((resolve, reject) => {
                var collection = this.db.get(this.collection);
                collection.remove({ _id: id }, function(err, doc) {
                    if (err) throw err;
                    resolve(doc);
                });
            });

            return promise;
        }
    }
}
