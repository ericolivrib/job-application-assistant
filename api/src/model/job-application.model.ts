import { UUID } from "node:crypto";

export class JobApplication {
    id!: UUID;
    description!: string;
    url!: string;
}