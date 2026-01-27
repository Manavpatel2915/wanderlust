import express from 'express';
import passport from "passport";

import type { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectdb from './config/connectdb'
import UserRoutes from './routes/UserRoutes';



connectdb();
const app =express();
const PORT = process.env.PORT||3000 ;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user',UserRoutes);

app.get('/',(req:Request ,res:Response)=>{
    res.send('hello');
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})



