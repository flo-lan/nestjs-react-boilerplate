import { UserEntity } from "./user.entity";
import { CreateUserDTO } from "./dto/user.dto";
import { UserRepository } from "./user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    const findOneOptions = {
      id: id,
    };
    return this.userRepository.findOne(findOneOptions);
  }

  async createUser(dto: CreateUserDTO): Promise<UserEntity> {
    const { name, email } = dto;
    const user = new UserEntity(name, email);

    await this.userRepository.persistAndFlush(user);
    return user;
  }
}
