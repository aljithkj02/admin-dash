import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected');
}

export default  connectDB;