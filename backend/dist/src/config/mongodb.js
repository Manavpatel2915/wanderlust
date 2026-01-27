import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_URL);
        console.log(`Mongodb connected at this url: ${process.env.MONGODB_URL} `);
    }
    catch (error) {
        console.log('mongodb connection error', error);
    }
};
export default connectDB;
//# sourceMappingURL=mongodb.js.map