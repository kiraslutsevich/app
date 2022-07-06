import express from 'express';
import userRouter from './routes/userRouter';
import authRouter from './routes/authRouter';

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/auth', authRouter);

export default app;
