import * as Express from "express";
import { makeTaskService } from "../service/task.service";
import { ITaskService } from "../service/itask.service";
import { Task } from "../model/task.interface";
import { TaskDBService } from "../service/taskdb.service";

export function makeTaskRouter(taskService : ITaskService): Express.Express {
    const taskRouter: Express.Express = Express();

    taskRouter.get("/", async (req: Express.Request, res: Express.Response) => {
        try {
            const tasks: Array<Task> = await taskService.getTasks();
            res.status(200).send(tasks);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    });

    taskRouter.put("/", async (req: Express.Request, res: Express.Response) => {
        try {
            const description: string = req.body.description;

            if (!description) {
                res.status(400).send("Missing description\n");
                return;
            }

            const task: Task = await taskService.createTask(description);
            res.status(201).send(task);
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    });

    taskRouter.put("/:id", async (req: Express.Request, res: Express.Response) => {
        try {
            const id: number = parseInt(req.params.id, 10);

            if (!req.body.done) {
                res.status(400).send("Bad call to /task/:id\n");
                return;
            }

            const completed: boolean = await taskService.markDone(id);

            if (!completed) {
                res.status(400).send(`No task with id ${id}\n`);
                return;
            }

            res.status(200).send("Task set to done\n");
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    });
    return taskRouter;
}

export function taskRouter() : Express.Express {
    return makeTaskRouter(new TaskDBService());   
}