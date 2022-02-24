import * as Express from "express";
import { taskRouter, taskRouterDB } from "./router/task.router";
import * as path from "path";
import * as cors from "cors";

export const app : Express.Express = Express();

app.use(Express.json());
app.use(cors());
app.use(Express.static(path.join(__dirname, '../../client/build')));

app.use("/task", taskRouterDB());