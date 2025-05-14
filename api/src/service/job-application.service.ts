import { Types } from "mongoose";

import { JobApplication } from '../model/job-application.model';
import { CreateJobApplicationDto } from "../dto/create-job-application.dto";
import { JobApplicationDto } from '../dto/job-application.dto';
import { NotFoundError } from "../exception/not-found.error";

export async function getJobApplications(): Promise<JobApplicationDto[]> {
    const jobApplications = await JobApplication.find();
    return jobApplications.map((ja) => new JobApplicationDto({
        id: ja._id,
        description: ja.description,
        url: ja.url,
        keywords: ja.keywords
    }));
}

export async function getJobApplicationById(id: Types.ObjectId): Promise<JobApplicationDto> {
    const jobApplication = await JobApplication.findById(id);

    if (!jobApplication) {
        throw new NotFoundError('Aplicação de Vaga não encontrada');
    }

    return new JobApplicationDto({
        id: jobApplication._id,
        description: jobApplication.description,
        url: jobApplication.url,
        keywords: jobApplication.keywords
    });
}

export async function createJobApplication(dto: CreateJobApplicationDto): Promise<Types.ObjectId> {
    const jobApplication = new JobApplication({ ...dto });
    await jobApplication.save();
    return jobApplication._id;
}