import { app } from "./start";
import * as SuperTest from "supertest";
import { Task } from "./model/task.interface";

jest.mock("./db/conn");

test("If we PUT a task T then GET the list of tasks, we should get the lits [T]", async () => {
    const request : SuperTest.SuperTest<SuperTest.Test> = 
        SuperTest(app);

    const res = await request.put("/task")
        .send({description:"Test data"});
    console.log(res.body);
    expect(res.statusCode).toBe(201);

    const res2 = await request.get("/task");
    expect(res2.statusCode).toBe(200);
    console.log(res2.body);
    expect(res2.body.length).toBe(1);
    expect(res2.body[0].description).toEqual("Test data");
});