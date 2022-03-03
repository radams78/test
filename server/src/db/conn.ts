import { createConnection, Connection } from "mongoose";

export const conn : Promise<Connection> = Promise.resolve(createConnection("mongodb+srv://radams78:gY9NDTKVT3gdmLw@tutorial.2ayhy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"));