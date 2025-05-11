import { Types } from "mongoose";

export class JobApplicationDto {
    readonly _id!: Types.ObjectId;
    readonly description!: string;
    readonly url!: string;
    readonly keywords: string[];

    constructor(_id: Types.ObjectId, description: string, url: string, keywords: string[]) {
        this._id = _id;
        this.description = description;
        this.url = url;
        this.keywords = keywords
    }
}