import express from 'express';
import { jobApplicationRouter } from './job-application.router';
import { userRouter } from './user.router';

const router = express.Router();

router.use('/v1/users', userRouter);
router.use('/v1/job-applications', jobApplicationRouter);

export { router };