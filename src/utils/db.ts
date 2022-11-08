import mongoose from 'mongoose';
const url = "mongodb://localhost:27017/node_project"
const option = {
    useNewUrlParser: true,
    dbName: "node_project",
}
export const db = mongoose.connect(url,option)