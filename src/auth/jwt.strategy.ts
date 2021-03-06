import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/entity/user.entity';
import { jwtContants } from './jwt.contants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 获取请求header token值
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      secretOrKey: jwtContants.secret,
    });
  }

  async validate(payload: any) {
    //payload：jwt-passport认证jwt通过后解码的结果   
     
    return { id: payload.id, username: payload.username, password: payload.password};
  }
}
