import { Task } from "../model/task.interface";
import { ITaskService } from "./itask.service";
import { connect, Schema, model } from "mongoose";

connect("mongodb+srv://radams78:gY9NDTKVT3gdmLw@tutorial.2ayhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const taskSchema : Schema = new Schema({
    id : {
        type : Number,
        required : true,
        unique: true
    },
    description : {
        type : String,
        required : true
    },
    done : {
        type : Boolean,
        required : true
    }
})

const taskModel = model<Task>("Todo", taskSchema);

export class TaskDBService implements ITaskService {
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