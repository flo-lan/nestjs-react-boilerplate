import { Logger } from "@nestjs/common";
import { Options } from "@mikro-orm/core";
import { UserEntity } from "../../modules/user/user.entity";
import config from "../../config";

const logger = new Logger("Database");
const ormConfig: Options = {
  entities: [UserEntity],
  dbName: config.database.name,
  type: "mysql",
  host: config.database.host,
  debug: config.environment === "development",
  user: config.database.user,
  password: config.database.password,
  logger: logger.log.bind(logger),
  migrations: {
    path: "dist/src/database/migrations",
    pathTs: "src/database/migrations",
  },
};

export default ormConfig;
