import { taskDBService } from "../taskdb.service";

jest.mock("../../db/conn");

test("Creating a task should add a task to the database", async () => {
    await taskDBService.createTask("Test task");
    const tasks = await taskDBService.getTasks();
    expect(tasks.length).toBe(1);
});