import express from 'express';
import { jobApplicationRouter } from './job-application.router';

const router = express.Router();

router.use('/v1/job-applications', jobApplicationRouter);

export { router };