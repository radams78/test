import { Task } from "../model/task.interface";
import { ITaskService } from "./itask.service";

export class TaskService implements ITaskService {
    private tasks: { [key: number]: Task };

    constructor(tasks: { [key: number]: Task }) {
        this.tasks = tasks;
    }

    getTasks: () => Promise<Array<Task>> = async () => {
        return Object.values(this.tasks);
    }

    createTask: (description: string) => Promise<Task> =
        async (description: string) => {
            const newTask: Task = {
                id: new Date().valueOf(),
                description: description,
                done: false
            }

            this.tasks[newTask.id] = newTask;

            return newTask;
        }

    // Returns true if task with given id number exists, false if task could not be found
    markDone: (id: number) => Promise<boolean> =
        async (id: number) => {
            const task: Task = this.tasks[id];

            if (!task) {
                return false;
            }

            task.done = true;
            return true;
        }
}

export function makeTaskService(): TaskService {
    return new TaskService({});
}
