import { Task } from "../model/task.interface";

export interface ITaskService {
    getTasks() : Promise<Array<Task>>
    createTask(description : string) : Promise<Task>
    markDone(id : number) : Promise<boolean>
}