import mongoose from "mongoose";
import { DB_NAME } from "../constants/index.js";

export const dbConnect = async () => {
    try {
        const FULL_URI = `${process.env.MONGODB_URI.replace(/\/+$/, '')}/${DB_NAME}?retryWrites=true&w=majority`;
        const connectionInstance = await mongoose.connect(`${FULL_URI}`);
        console.log('Connected to MongoDB !!!',`The host is ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('Error connecting to MongoDB !!! ', error);
        process.exit(1);
    }
}
