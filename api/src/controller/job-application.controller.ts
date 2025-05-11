import { Request, Response } from "express";
import * as jobApplicationService from "../service/job-application.service";
import { UUID } from "node:crypto";
import { JobApplication } from "../model/job-application.model";
import { serverConfig } from "../config/server.config";

export async function getJobApplications(_: Request, res: Response) {
    const jobApplications = await jobApplicationService.getJobApplications();
    res.status(200).json(jobApplications);
}

export async function getJobApplicationById(req: Request, res: Response) {
    const id = <UUID>req.params.id;
    const jobApplication = await jobApplicationService.getJobApplicationById(id);

    res.status(200).json(jobApplication);
}

export async function createJobApplication(req: Request, res: Response) {
    const jobApplication: JobApplication = req.body;

    const id = await jobApplicationService.createJobApplication(jobApplication);

    const location = `${serverConfig.url}/v1/job-applications/${id}`;

    res.status(201).location(location).send();
}