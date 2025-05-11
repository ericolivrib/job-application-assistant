export class CreateUserDto {
    readonly name!: string;
    readonly email!: string;
    readonly password!: string;
    readonly skills!: Set<string>;
}