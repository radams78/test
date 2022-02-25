import { ObjectId } from "mongoose";

export interface Task {
    id : number;
    description : string;
    done : boolean
}