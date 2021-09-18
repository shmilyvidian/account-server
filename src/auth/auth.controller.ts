import { AuthService } from './auth.service';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() request): Promise<{ token: string }> {  
    return this.authService.login(request);
  }

  @Post('register')
  async register(@Body() user: CreateUserDto) {    
    return this.userService.register(user);
  }
}
