import {connect, Schema, Model} from "mongoose";
import {Task} from "../model/task.interface";

export async function connectToDatabase() : Promise<Model<Task>> {
    const db = await connect("mongodb+srv://radams78:gY9NDTKVT3gdmLw@tutorial.2ayhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

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

    return db.model<Task>("Todo", taskSchema);
}