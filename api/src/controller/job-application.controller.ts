import { Request, Response } from "express";
import * as jobApplicationService from "../service/job-application.service";
import { serverEnv } from "../env/server.env";
import { CreateJobApplicationDto } from "../dto/create-job-application.dto";
import { Types } from "mongoose";

export async function getJobApplications(_: Request, res: Response) {
    const jobApplications = await jobApplicationService.getJobApplications();
    res.status(200).json(jobApplications);
}

export async function getJobApplicationById(req: Request, res: Response) {
    const id = req.params.id as unknown as Types.ObjectId;
    const jobApplication = await jobApplicationService.getJobApplicationById(id);

    res.status(200).json(jobApplication);
}

export async function createJobApplication(req: Request, res: Response) {
    const dto: CreateJobApplicationDto = req.body;
    const id = await jobApplicationService.createJobApplication(dto);

    const location = `${serverEnv.url}/v1/job-applications/${id}`;
    res.status(201).location(location).send();
}