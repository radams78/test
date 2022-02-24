import {model, Schema} from "mongoose";
import {Task} from "../model/task.interface";

export const taskSchema : Schema = new Schema({
    description : {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
},
{timestamps: true});

export default model<{description : string, done : boolean}>("Todo", taskSchema);

