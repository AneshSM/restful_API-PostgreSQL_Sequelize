import { NextFunction, Request, Response } from 'express';
import User_Service from '@services/users.service';
const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return new Promise((resolve, reject) => {
    try {
    } catch (error) {
      reject({
        status: '400',
        message: 'Client error',
        error: error,
      });
    }
  });
};

export { loginController };
