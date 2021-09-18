import { UpdateUserDto } from './dto/user.dto';
import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findUserByName(username: string): Promise<User> {
    const user = await this.usersRepository.findOne({ username });
    return user;
  }
  async register(user) {
    const u = new User();
    u.username = user.username;
    u.password = user.password;
    u.signature = user.signature;
    u.avatar = user.avatar;

    const list = await this.findUserByName(user.username);
    if (list) {
      throw new BadRequestException('error', 'username is already resigter');
    }

    this.usersRepository.save(u);
    return u;
  }
  async getUserByName(username: string): Promise<User> {
    const list = await this.findUserByName(username);
    return list;
  }

  async editUser(user: UpdateUserDto, userInfo: User): Promise<number> {    
    const u = await this.usersRepository.update({id: userInfo.id}, { ...user });    
    return userInfo.id;
  }
}
