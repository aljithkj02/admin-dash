import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.get('/', (req, res) => {
    res.send({ success: true, message: 'Welcome to my server!'});
})


const startServer = () => {

    app.listen(process.env.PORT, () => {
        console.log(`Server started, Listening to localhost:${process.env.PORT}`);
    })
}
startServer();