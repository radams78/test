    import { Task } from "../model/task.interface";
            
    export interface ITaskService {
        getTasks() : Promise<Array<Task>>
        createTask(description : string) : Promise<Task>
        markDone(id : number) : Promise<boolean>
    }

    export class TaskService implements ITaskService {
        private tasks : { [key : number] : Task };

        constructor(tasks : { [key : number] : Task }) {
            this.tasks = tasks;
        }

        getTasks : () => Promise<Array<Task>> = async () => {
            return Object.values(this.tasks);
        }
    
        createTask : (description : string) => Promise<Task> = 
            async (description : string) => {
                const newTask : Task = {
                    id: new Date().valueOf(),
                    description: description,
                    done: false
                }
    
                this.tasks[newTask.id] = newTask;
    
                return newTask;
            }
    
        // Returns true if task with given id number exists, false if task could not be found
        markDone : (id: number) => Promise<boolean> =
            async (id: number) => {
                const task : Task = this.tasks[id];
    
                if (! task) {
                    return false;
                }
    
                task.done = true;
                return true;
            }
    }

    export function makeTaskService() : TaskService { 
        return new TaskService({
            1 : {id : 1, description : "Put out the cat", done : false},
            2 : {id : 2, description : "Clean the bathroom", done : false}
        }); 
    }
