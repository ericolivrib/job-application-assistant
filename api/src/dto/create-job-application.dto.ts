import { Types } from "mongoose";

export class CreateJobApplicationDto {
    readonly userId!: Types.ObjectId;
    readonly description!: string;
    readonly url!: string;
}