import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService, JwtService, JwtStrategy]
})
export class AuthModule {}
