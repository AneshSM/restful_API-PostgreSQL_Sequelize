import { User } from '@models/index.model';

const isDev: boolean = process.env.NODE_ENV === 'development';

const dbInit = () => {
  User.sync({ alter: isDev });
};
export default dbInit;
