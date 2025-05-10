import { Request, Response } from "express";
import * as jobApplicationService from "../service/job-application.service";

export async function getJobApplications(_: Request, res: Response) {
    const jobApplications = await jobApplicationService.getJobApplications();
    res.status(200).json(jobApplications);
}