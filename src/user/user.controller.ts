import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, Query, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from './entity/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import {  GetAuthenticatedUser } from '../user.decorator';

@UseGuards(AuthGuard('jwt'))
@ApiTags('user')
@Controller('user')
@ApiBearerAuth('jwt')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUserByName')
  async getUserByName(@Query('name') name: string): Promise<User> {
    return this.userService.getUserByName(name);
  }

  @Post('updateUser')  
  async updateUser(@Body() updateUser: UpdateUserDto, @GetAuthenticatedUser() userInfo: User): Promise<number> {    
    const u = await this.getUserByName(userInfo.username)
    
    return this.userService.editUser(updateUser, u);
  }
}
