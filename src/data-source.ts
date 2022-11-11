import { DataSource } from "typeorm";
require("dotenv").config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,
  logging: true,
  synchronize: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

export default AppDataSource;