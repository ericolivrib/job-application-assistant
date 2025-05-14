import express from 'express';

import * as userController from '../controller/user.controller';
import { asyncHandler } from '../util/async-handler';

const userRouter = express.Router();

userRouter.post('/', asyncHandler(userController.createUser));
userRouter.get('/', asyncHandler(userController.getUsers));

export { userRouter };


