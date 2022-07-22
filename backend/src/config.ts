type Environment = "development" | "production";

interface Config {
  environment: Environment;

  server: {
    port: number;
    url: string;
  };

  logger: {
    maxFileSize: number;
    fileName: string;
    logLevel: string;
  };

  database: {
    name: string;
    user: string;
    password: string;
    host: string;
    logging: boolean;
  };
}

const config: Config = {
  environment: process.env.NODE_ENV as Environment,

  server: {
    port: parseInt(process.env.SERVER_PORT, 10),
    url: process.env.SERVER_URL || `http://localhost:${process.env.PORT}`,
  },

  logger: {
    maxFileSize: process.env.LOG_FILE_SIZE
      ? parseInt(process.env.LOG_FILE_SIZE, 10)
      : 10485760, // 10mb,
    fileName: process.env.LOG_FILE_NAME || "projectname_logs",
    logLevel: process.env.LOG_LEVEL || "info",
  },

  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    logging: process.env.DB_LOGGING?.toLowerCase() === "true",
  },
};

export default config;
