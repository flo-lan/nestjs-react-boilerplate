import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { UserRepository } from "./user.repository";

@Entity({ tableName: "users", customRepository: () => UserRepository })
export class UserEntity {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
