import { app } from "./start";
import * as SuperTest from "supertest";
import { Task } from "./model/task.interface";

test("If we PUT a task T then GET the list of tasks, we should get the lits [T]", () => {
    const request : SuperTest.SuperTest<SuperTest.Test> = 
        SuperTest(app);

    request.put("/task")
        .send({description : "Test data"})
        .end((err, res) => {
            if (err) throw err;
        });

    return request.get("/task")
        .then((res) => {
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBe(1);
            expect(res.body[0].description).toEqual("Test data");
        });
});