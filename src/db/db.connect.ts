import mongoose from "mongoose";

const initializeConnectionTodb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("db connected");
    } catch(error) {
        throw error;
    } 
} 

export {initializeConnectionTodb}
