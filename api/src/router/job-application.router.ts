import express from 'express';

import * as jobApplicationController from '../controller/job-application.controller';

const jobApplicationRouter = express.Router();

jobApplicationRouter.get('/', jobApplicationController.getJobApplications);

export { jobApplicationRouter };