import { Types } from "mongoose";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../model/user.model";

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