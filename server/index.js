import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';

dotenv.config();

const app = express(); 
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send({ success: true, message: 'Welcome to my server!'});
})

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);


const startServer = () => {
    app.listen(process.env.PORT, async () => {
        console.log(`Server started, Listening to localhost:${process.env.PORT}`);
        await connectDB();
    })
}
startServer();