import express from 'express';

import * as userController from '../controller/user.controller';

const userRouter = express.Router();

userRouter.post('/', userController.createUser);

export { userRouter };


