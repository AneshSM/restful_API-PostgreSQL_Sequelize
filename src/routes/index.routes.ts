import { Router, Application, Request, Response } from 'express';
import authRouter from './auth.route';

const apiRouter = Router();

apiRouter.use('/auth', authRouter);

export default apiRouter;
