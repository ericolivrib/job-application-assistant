import express from 'express';

import * as jobApplicationController from '../controller/job-application.controller';

const jobApplicationRouter = express.Router();

jobApplicationRouter.get('/', jobApplicationController.getJobApplications);
jobApplicationRouter.get('/:id', jobApplicationController.getJobApplicationById);

jobApplicationRouter.post('/', jobApplicationController.createJobApplication)

export { jobApplicationRouter };