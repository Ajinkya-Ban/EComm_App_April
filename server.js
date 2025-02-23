
import express from 'express';
import colors from 'colors';
import env from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';

//configure dotenv file
env.config()

//config database here
connectDB();

//Register the app
const app = express();

//use middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

//define our root paths
app.use("/api/v1/auth", authRoutes);



const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`.bgMagenta.white);
});