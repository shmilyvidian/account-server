import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BillModule } from './bill/bill.module';
import { TypeModule } from './type/type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, BillModule, TypeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}