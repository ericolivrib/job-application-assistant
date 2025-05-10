import { randomUUID, UUID } from "node:crypto";
import { JobApplication } from "../model/job-application.model";

const jobApplications: JobApplication[] = [
    {
        id: randomUUID(),
        description: 'Desenvolvedor Java Full-Stack',
        url: 'https://www.example.com'
    },
    {
        id: randomUUID(),
        description: 'Desenvolvedor .Net Backend',
        url: 'https://www.example.com'
    },
    {
        id: randomUUID(),
        description: 'Cientista de Dados',
        url: 'https://www.example.com'
    }
];

export async function getJobApplications(): Promise<JobApplication[]> {
    return jobApplications;
}

export async function getJobApplicationById(id: UUID): Promise<JobApplication> {
    const job = jobApplications.find((job) => job.id === id);

    if (!job) {
        throw new Error('Vaga de emprego não encontrada');
    }

    return job;
}
