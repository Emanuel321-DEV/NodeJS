import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users - Required Authentication')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async listAll() {
    return await this.usersService.findAll();
  }

  @ApiTags('User')
  @Post()
  async store(@Body() data: CreateUserDTO) {
    return await this.usersService.store(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id') // PUUUIDPIPE = verifica se o id eh um uuid
  async showOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.findOneOrFail(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: UpdateUserDTO,
  ) {
    return await this.usersService.update(id, data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.usersService.destroy(id);
  }
}
