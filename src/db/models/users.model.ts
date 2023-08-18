import { DataType, DataTypes, Model, Optional } from 'sequelize';
import dbConfig from '@src/db/config.db';

interface User_Type {
  id: number;
  username: string;
  password: string;
}

export interface User_Input extends Optional<User_Type, 'id'> {}
export interface User_Output extends Required<User_Type> {}

export class User extends Model<User_Type, User_Input> implements User_Type {
  public declare id: number;
  public declare username: string;
  public declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  },
  { timestamps: true, sequelize: dbConfig }
);
