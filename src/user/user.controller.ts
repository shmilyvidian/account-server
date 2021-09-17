import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/user.dto';

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
  async updateUser(@Body() user: User): Promise<string> {
    return this.userService.editUser(user);
  }
}
