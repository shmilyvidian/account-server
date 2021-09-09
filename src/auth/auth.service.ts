import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    ){}

  async validate(username:string, password:string): Promise<Partial<User>>{
    let userInfo;
    const user = await this.userService.findUserByName(username)
    if(user && user.password === password){
      const {password, ...userInfo} = user
      return userInfo
    }
    return null;
  }
  async login(user: User): Promise<{token: string}> {
    const {id,username} = user;
    return {
      token: this.jwtService.sign({username, sub:id})
    }
  }
}
