import { IsNotEmpty, IsEmail,IsString } from "class-validator"

export class CreateUserDTO{
    @IsEmail()
    @IsNotEmpty()
    email:string
    @IsString()
    password:string
}