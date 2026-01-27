import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectdb from './config/connectdb';
import UserRoutes from './routes/UserRoutes';
connectdb();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
// app.use('/user',UserRoutes);
//# sourceMappingURL=server.js.map