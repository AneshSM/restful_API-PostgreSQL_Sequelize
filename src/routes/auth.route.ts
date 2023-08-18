import { loginController } from '@controllers/auth.controller';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.delete('/logout');
export default authRouter;
