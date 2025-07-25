import {IsEmail, IsNotEmpty, MinLength, IsOptional, IsEnum } from 'class-validator'

export class RegisterDto {
    @IsEmail()
    email: string       
    
    @IsNotEmpty()
    name: string
    
    @MinLength(6)
    password: string
}

export class LoginDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string
}