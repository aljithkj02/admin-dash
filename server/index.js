import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send({ success: true, message: 'Welcome to my server!'});
})




const startServer = () => {
    app.listen(process.env.PORT, async () => {
        console.log(`Server started, Listening to localhost:${process.env.PORT}`);
        await connectDB();
    })
}
startServer();