import { GetAuthenticatedUser } from './../user.decorator';
import { UserService } from '../user/user.service';
import { Injectable, Req } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    ){}

  async validate(username:string, password:string): Promise<Partial<User>>{
    const user = await this.userService.findUserByName(username)
   
    if(user && user.password === password){
      const {password, ...userInfo} = user
      
      return userInfo
    }
    return null;
  }

  async login(user: {username:string, password:string}) : Promise<{token: string}> {
    const {password,username} = user;    
    return {
      token: this.jwtService.sign({username, password})
    }
  }
}
