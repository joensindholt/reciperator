import Repository = require('../task.repository');
import Routes = require('./routes');

export class TaskRoutes extends Routes.Routes {

    taskRepository: Repository.TaskRepository;

    constructor(db: any, router: any) {
        this.taskRepository = new Repository.TaskRepository(db);
        super(router, "tasks", this.taskRepository);
    }
}
