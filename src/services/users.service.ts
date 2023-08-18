import User from '@db/dal/user.dal';
import { User_Input, User_Output } from '@models/users.model';

const create = async (payload: User_Input): Promise<User_Output> => {
  return await User.create(payload);
};

const findOne = async (id: number): Promise<User_Output | null> => {
  return await User.findOne(id);
};

const findAll = async (): Promise<User_Output[]> => {
  return await User.findAll();
};

const deleteOne = async (id: number): Promise<Boolean> => {
  return await User.deleteOne(id);
};

export default { create, findOne, findAll, deleteOne };
