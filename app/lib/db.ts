import mongoose from "mongoose";
export const mongodbConnection  = 'mongodb://127.0.0.1:27017/ReportARoad';
export const main = async () => {
    const db = await  mongoose.connect(mongodbConnection);
    return db;
}