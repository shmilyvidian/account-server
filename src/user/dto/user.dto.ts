import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'username 不能为空' })
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'password 不能为空' })
  password: string;

  @ApiProperty()
  @IsString()
  signature: string;
}
