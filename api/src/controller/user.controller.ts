import { Request, Response } from "express";
import { CreateUserDto } from "../dto/create-user.dto";
import * as userService from '../service/user.service';
import { serverEnv } from "../env/server.env";


export async function createUser(req: Request, res: Response) {
    const user: CreateUserDto = req.body;
    const userId = await userService.createUser(user);

    const location = `${serverEnv.url}/v1/users/${userId}`;

    res.status(201).location(location).send();
}

export async function getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    res.status(200).json(users);
}