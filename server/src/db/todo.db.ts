import {Schema} from "mongoose";
import {Task} from "../model/task.interface";
import { conn } from "./conn";

const taskSchema : Schema = new Schema({
    id : {
        type : Number,
        required : true,
        unique: true
    },
    description : {
        type : String,
        required : true
    },
    done : {
        type : Boolean,
        required : true
    }
})

export const taskModel = conn.model<Task>("Todo", taskSchema);
