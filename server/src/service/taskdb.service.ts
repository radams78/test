import { Task } from "../model/task.interface";
import { ITaskService } from "./itask.service";
import { taskModel } from "../db/todo.db";

class TaskDBService implements ITaskService {

    async getTasks(): Promise<Task[]> {
        return await taskModel.find();
    }

    async createTask(description: string): Promise<Task> {
        return await taskModel.create({
            id : new Date().valueOf(),
            description : description,
            done : false
        })
    }

    markDone(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export const taskDBService = new TaskDBService();