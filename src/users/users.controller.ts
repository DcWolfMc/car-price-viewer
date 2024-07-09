import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Query,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create.user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDTO } from './dtos/update.user.dto';

@Controller('auth')
export class UsersController {
  constructor(private UserService: UsersService) {}

  @Post('/signup')
  create(@Body() user: CreateUserDTO) {
    return this.UserService.create(user.email, user.password);
  }
  @Get('/:id')
  findUser(@Param('id', ParseIntPipe) id: number) {
    return this.UserService.findOne(id);
  }
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.UserService.find(email);
  }
  @Patch('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateData: UpdateUserDTO,
  ) {
    return this.UserService.update(id, UpdateData);
  }

  @Delete('/:id')
  removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.UserService.remove(id);
  }
}
