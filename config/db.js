import mongoose from "mongoose";
import colors from 'colors';
import env from 'dotenv'

env.config();

const connectDB = async()=>{
try {

    const mongoDBConnString = process.env.DB_URL;
    const mongoConn = await mongoose.connect(mongoDBConnString);
    console.log(`Connected to mongoDB :${mongoConn.connection.host}`.bgGreen .white);

    
} catch (error) {
    console.log(`Error connecting to mongoDB :${error}`.bgRed .white);
}
}

export default connectDB;

