import { Types } from "mongoose";

export class UserDto {
    readonly id!: Types.ObjectId;
    readonly name!: string;
    readonly email!: string;
    readonly skills!: string[];

    constructor(props?: Partial<UserDto>) {
        Object.assign(this, props);
    }
}