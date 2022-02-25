import { Task } from "../model/task.interface";
import { ITaskService } from "./itask.service";
import { connect, Schema, model, Model } from "mongoose";
import { connectToDatabase } from "../db/todo.db";

class TaskDBService implements ITaskService {
    private taskModel : Model<Task>

    constructor(taskModel : Model<Task>) {
        this.taskModel = taskModel;
    }

    async getTasks(): Promise<Task[]> {
        return await this.taskModel.find();
    }

    async createTask(description: string): Promise<Task> {
        return await this.taskModel.create({
            id : new Date().valueOf(),
            description : description,
            done : false
        })
    }

    markDone(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export async function taskDBService() : Promise<ITaskService> {
    return new TaskDBService(await connectToDatabase());
}