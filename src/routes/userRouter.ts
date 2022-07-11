import express, { Router } from 'express';
import deleteUser from '../controllers/user/deleteUser';
import updateUser from '../controllers/user/updateUser';
import getUser from '../controllers/user/getUser';
import getAllUsers from '../controllers/user/getAllUsers';
import createValidateMiddleware from '../middlewars/createValidateMiddleware';
import { updateUserSchema, changePasswordSchema } from '../validation/userSchemas';
import changePassword from '../controllers/user/changePassword';
import checkAuth from '../middlewars/checkAuth';

const userRouter: Router = express.Router();
userRouter.use(checkAuth);

userRouter.get('/all', getAllUsers);
userRouter.get('/', getUser);
userRouter.delete('/', deleteUser);
userRouter.patch('/password', createValidateMiddleware(changePasswordSchema), changePassword);
userRouter.patch('/', createValidateMiddleware(updateUserSchema), updateUser);

export default userRouter;
