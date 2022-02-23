import * as TS from "../task.service";
import { Task } from "../../model/task.interface";

test("getTasks when to do list is empty should return the empty list", () => {
    const taskService = new TS.TaskService({});
    return taskService.getTasks().then(
        (tasks: Task[]) => {
            expect(tasks).toEqual([]);
        }
    )
});

test("Creating a task should return a task with the given description", () => {
    const taskService = new TS.TaskService({});
    return taskService.createTask("Test description").then((task : Task) => {
        expect(task.description).toEqual("Test description");
        expect(task.done).toBe(false);
    })
});

test("Creating a task should make the to do list have length 1", () => {
    const taskService = new TS.TaskService({});

    return taskService.createTask("Test description").then(async (_ : Task) => {
        const tasks : Task[] = await taskService.getTasks();
        expect(tasks.length).toBe(1);
        expect(tasks[0].description).toEqual("Test description");
        expect(tasks[0].done).toBe(false);
    });
});

test("markDone should mark a task as done", () => {
    const taskService = new TS.TaskService(
        {25 : { id : 25, description : "Test task", done : false}}
        );

    return taskService.markDone(25).then(async (returnValue : boolean) => {
        const tasks : Task[] = await taskService.getTasks();
        expect(returnValue).toBe(true);
        expect(tasks[0].id).toBe(25);
        expect(tasks[0].done).toBe(true);
    })
})