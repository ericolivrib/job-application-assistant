import { Request, Response } from "express";
import * as jobApplicationService from "../service/job-application.service";
import { UUID } from "node:crypto";

export async function getJobApplications(_: Request, res: Response) {
    const jobApplications = await jobApplicationService.getJobApplications();
    res.status(200).json(jobApplications);
}

export async function getJobApplicationById(req: Request, res: Response) {
    const id = <UUID>req.params.id;
    const jobApplication = await jobApplicationService.getJobApplicationById(id);

    res.status(200).json(jobApplication);
}