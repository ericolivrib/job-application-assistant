import { Types } from "mongoose";

export class JobApplicationDto {
    readonly id!: Types.ObjectId;
    readonly description!: string;
    readonly url!: string;
    readonly keywords: string[];

    constructor(id: Types.ObjectId, description: string, url: string, keywords: string[]) {
        this.id = id;
        this.description = description;
        this.url = url;
        this.keywords = keywords
    }
}