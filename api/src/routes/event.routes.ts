import Repository = require('../event.repository');
import Routes = require('./routes');

export class EventRoutes extends Routes.Routes {

    eventRepository: Repository.EventRepository;

    constructor(db: any, router: any) {
        this.eventRepository = new Repository.EventRepository(db);
        super(router, "events", this.eventRepository);
    }
}
