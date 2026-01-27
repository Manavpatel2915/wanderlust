import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.MONGODB_URL;
const connectMongodb = async () => {
    try {
        const connect = await mongoose.connect(url);
        console.log(`MongoDB connected at: ${url}`);
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
export default connectMongodb;
//# sourceMappingURL=mongodbconnect.js.map