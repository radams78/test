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

    async markDone(id: number): Promise<boolean> {
        const result = await taskModel.updateOne(
            {id : id},
            {done : true}
        );
        return (result.matchedCount === 1);
    }
}

export const taskDBService = new TaskDBService();