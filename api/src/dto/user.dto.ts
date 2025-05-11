import { Types } from "mongoose";

export class UserDto {
    readonly id!: Types.ObjectId;
    readonly name!: string;
    readonly email!: string;
    readonly skills!: string[];

    constructor(id: Types.ObjectId, name: string, email: string, skills: string[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.skills = skills;
    }
}