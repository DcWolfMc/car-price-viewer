import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create.user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private UserService: UsersService) {}

  @Post('/signup')
  create(@Body() user: CreateUserDTO) {
    return this.UserService.create(user.email, user.password);
  }
}
