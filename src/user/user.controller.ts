import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/user.dto';
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this.userService.register(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async list() {
    return 'Ok11';
  }

  @Get('getUserByName')
  async getUserByName(@Query('name') name: string): Promise<User> {
    return this.userService.getUserByName(name);
  }

  @Post('updateUser')
  async updateUser(@Body() user: User): Promise<string> {
    return this.userService.editUser(user);
  }
}
