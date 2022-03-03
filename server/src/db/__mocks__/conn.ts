import { MongoMemoryServer } from "mongodb-memory-server";
import { connect } from "mongoose";

async function makeConn() {
    const mongod = await MongoMemoryServer.create();
    return await connect(mongod.getUri());
}
export const conn = makeConn();