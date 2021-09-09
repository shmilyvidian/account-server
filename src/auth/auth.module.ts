import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { jwtContants } from './jwt.contants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: jwtContants.secret,
  }),],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
