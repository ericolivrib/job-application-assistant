import { Types } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../model/user.model";
import { UserDto } from "../dto/user.dto";

export async function createUser(dto: CreateUserDto): Promise<Types.ObjectId> {
    // Verificar se email existe
    const existsByEmail = await User.exists({ email: dto.email });

    if (existsByEmail) {
        throw new Error('E-mail já cadastrado no sistema');
    }

    const user = await User.create<CreateUserDto>({ ...dto });
    await user.save();

    return user._id;
}

export async function getUsers(): Promise<UserDto[]> {
    const users = await User.find();
    return users.map((u) => new UserDto(u._id, u.name, u.email, u.skills));
}