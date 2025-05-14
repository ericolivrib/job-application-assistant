import express from 'express';

import * as jobApplicationController from '../controller/job-application.controller';
import { asyncHandler } from '../util/async-handler';

const jobApplicationRouter = express.Router();

jobApplicationRouter.get('/', asyncHandler(jobApplicationController.getJobApplications));
jobApplicationRouter.get('/:id', asyncHandler(jobApplicationController.getJobApplicationById));

jobApplicationRouter.post('/', asyncHandler(jobApplicationController.createJobApplication))

export { jobApplicationRouter };