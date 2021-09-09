import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../user/entity/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
    this.authService = authService;
  }

  async validate(username: string, password: string): Promise<Partial<User>> {
    const user = await this.authService.validate(username, password);
    if (user) return user;
    else throw new UnauthorizedException('incorrect username or password');
  }
}