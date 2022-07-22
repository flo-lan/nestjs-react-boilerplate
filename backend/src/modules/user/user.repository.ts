import { EntityRepository } from "@mikro-orm/core";
import { UserEntity } from "./user.entity";

export class UserRepository extends EntityRepository<UserEntity> {}
