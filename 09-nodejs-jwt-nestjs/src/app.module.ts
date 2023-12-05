import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {  ConfigModule } from '@nestjs/config/dist';
import { UsersModule } from './users/users.module';
import { UsersEntity } from './users/users.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Permite o uso do process.env
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      url: process.env.DATABASE_URL,
      entities: [
        UsersEntity,
      ],
      synchronize: true, // Nao utilizar em prod
    } as TypeOrmModuleOptions),
    UsersModule, //criado em aula
    AuthModule,
  ],
})
export class AppModule {}
