import { connect, ObjectId } from "mongoose";
import { Task } from "../model/task.interface";
import { ITaskService } from "./task.service";
import taskScheme, { taskSchema } from "../db/task.scheme";

class TaskServiceDB implements ITaskService {
    async getTasks(): Promise<Task[]> {
        return await taskScheme.find();
    }

    async createTask(description: string): Promise<Task> {
        const t = await new taskScheme({
            description: description,
            done: false
        }).save();

        return {
            id : parseInt(t._id.toHexString(), 16),
            description : t.description,
            done : t.done
        };
    }

    async markDone(id: number): Promise<boolean> {
        const result = await taskScheme.updateOne(
            { _id : ObjectId. },
            { done : true }
        );
        return (result.matchedCount === 1);
    }
}

export async function makeTaskServiceDB() : Promise<ITaskService> {
    await connect("mongodb+srv://radams78:gY9NDTKVT3gdmLw@tutorial.2ayhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    return new TaskServiceDB();
}