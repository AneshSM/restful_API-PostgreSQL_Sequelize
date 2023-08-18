import { Sequelize, Options, Dialect, ModelCtor } from 'sequelize';
import dotenv from 'dotenv-safe';
//* Loads all variables defined in the .env to node environment process.env
dotenv.config();
const dev: Boolean = process.env.NODE_ENV === 'development' ? true : false;
const { DB_NAME, Test_DB, DB_USER, DB_PASSWORD, DB_HOST, DB_DRIVER } =
  process.env;
const options: Options = {
  database: dev ? (Test_DB as string) : (DB_NAME as string),
  username: DB_USER as string,
  password: DB_PASSWORD as string,
  host: DB_HOST,
  dialect: DB_DRIVER as Dialect,
  logging: false,
};

const dbConfig: Sequelize = new Sequelize(options);
export default dbConfig;
