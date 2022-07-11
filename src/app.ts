import express from 'express';
import userRouter from './routes/userRouter';
import authRouter from './routes/entryRouter';
import type from './type';

export const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/auth', authRouter);
