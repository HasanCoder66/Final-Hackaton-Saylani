import express from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/authRoute.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRoute.js'
import attendanceRoutes from './routes/attendanceRoute.js'
// import commentRouter from './routes/commentRoute.js'
// import commentRouter from './routes/commentRoute.js'
// import videoRouter from './routes/videoRoute.js'
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();
const port = 8500
dotenv.config();

// MIDDLEWARES
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);
app.use('/api/attendance', attendanceRoutes)
// app.use('/api/video', videoRouter)
// app.use('/api/comment', commentRouter)

app.use((err, req, res , next) => {
    const status = err.status || 500;
    const  message = err.message || 'something went wrong';
    return res.status(status).json({
        success : false,
        status ,
        message  
       })
});

const connect = () => {
    mongoose.connect('mongodb+srv://muhammadhasan3866:utt301xtNx6DSUVR@cluster0.uue1ckw.mongodb.net/?retryWrites=true&w=majority' )
    .then(()=> {
        console.log('Connect to DB')
    })
   .catch((err)=> {
    throw err
   })
};


app.listen( port , () => {
    console.log(`server listen on port ${port}`)
    connect()
});