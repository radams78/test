import { Task } from "../model/task.interface";
import { ITaskService } from "./itask.service";
import { taskModel } from "../db/todo.db";

class TaskDBService implements ITaskService {

    async getTasks(): Promise<Task[]> {
        const tm = await taskModel;
        return await tm.find();
    }

    async createTask(description: string): Promise<Task> {
        const tm = await taskModel;
        return await tm.create({
            id : new Date().valueOf(),
            description : description,
            done : false
        })
    }

    async markDone(id: number): Promise<boolean> {
        const tm = await taskModel;
        const result = await tm.updateOne(
            {id : id},
            {done : true}
        );
        return (result.matchedCount === 1);
    }
}

export const taskDBService = new TaskDBService();