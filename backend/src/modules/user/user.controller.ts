import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/user.dto";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserEntity[]> {
    return this.userService.getAll();
  }

  @Post()
  async createUser(@Body() dto: CreateUserDTO): Promise<UserEntity> {
    return this.userService.createUser(dto);
  }
}
