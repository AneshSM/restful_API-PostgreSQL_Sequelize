import { User, User_Input, User_Output } from '@src/db/models/users.model';

const create = async (payload: User_Input): Promise<User_Output> => {
  const user = User.create(payload);
  return user;
};

const findOne = async (id: number): Promise<User_Output | null> => {
  const user = User.findByPk(id);
  if (!user) throw new Error();
  return user;
};

const deleteOne = async (id: number): Promise<boolean> => {
  const count = User.destroy({ where: { id } });
  return !!count;
};

const findAll = async (): Promise<User_Output[]> => {
  return User.findAll();
};

export default { create, findOne, deleteOne, findAll };
