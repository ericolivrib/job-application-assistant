import { Types } from "mongoose";

export class JobApplicationDto {
    readonly id!: Types.ObjectId;
    readonly description!: string;
    readonly url!: string;
    readonly keywords!: string[];

    constructor(props?: Partial<JobApplicationDto>) {
        Object.assign(this, props);
    }
}