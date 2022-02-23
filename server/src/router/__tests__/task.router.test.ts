import { Express } from "express";
import * as SuperTest from "supertest";

import { makeTaskRouter } from "../task.router";
import { ITaskService } from "../../service/task.service";
import { Task } from "../../model/task.interface";

test("A GET request to / should send a response with the list of tasks", () => {
    const listOfTasks : Task[] = [
        {id: 1, description: "Task 1", done: true},
        {id: 2, description: "Task 2", done: false}
    ];

    class MockTaskService implements ITaskService {
        createTask(description: string): Promise<Task> {
            expect(0).toBe(1);
            return null;
        }

        markDone(id: number): Promise<boolean> {
            expect(0).toBe(1);
            return null;
        }
        
        getTasks : () => Promise<Task[]> = async () => {
            return listOfTasks;
        }
    }

    const ts : MockTaskService = new MockTaskService();

    const router : Express = makeTaskRouter(ts);
    
    const request : SuperTest.SuperTest<SuperTest.Test> = 
        SuperTest(router);

    request.get("/").then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(listOfTasks);
    });
});