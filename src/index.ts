import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv-safe';
import helmet from 'helmet';
import apiRouter from './routes/index.routes';
import dbInit from './db/init.db';
import logger from 'morgan';

dbInit(); // * Initiates the Database connection andLoads all variables defined in the .env to node environment process.env

const PORT: number = Number(process.env.PORT) || 3000;
const app: Application = express();

app.use(helmet()); //*Helmet helps secure Express apps by setting HTTP response headers.
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //* parse object, array and string request body in pu

app.use(logger('dev')); //* logs all request

app.get('/', (req: Request, res: Response) => {
  res.send(
    '<h1>Hi Express TypeScript with Sequelize Backend was Successful</h1>'
  );
});

app.use('/api/v1', apiRouter);

try {
  app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
} catch (error) {
  console.log(`Error : ${error}`);
}
