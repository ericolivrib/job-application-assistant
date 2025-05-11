import { Types } from "mongoose";

import { JobApplication } from '../model/job-application.model';
import { CreateJobApplicationDto } from "../dto/job-application-request.dto";
import { JobApplicationDto } from '../dto/job-application.dto';

export async function getJobApplications(): Promise<JobApplicationDto[]> {
    const jobApplications = await JobApplication.find();
    return jobApplications.map((ja) => new JobApplicationDto(ja._id, ja.description as string, ja.url as string, ja.keywords));
}

export async function getJobApplicationById(id: Types.ObjectId): Promise<JobApplicationDto> {
    const job = await JobApplication.findById(id);

    if (!job) {
        throw new Error('Aplicação de Vaga não encontrada');
    }

    return new JobApplicationDto(job._id, job.description as string, job.url as string, job.keywords);
}

export async function createJobApplication(dto: CreateJobApplicationDto): Promise<Types.ObjectId> {
    const jobApplication = new JobApplication({ ...dto });
    await jobApplication.save();
    return jobApplication._id;
}