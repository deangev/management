import { catchAsync } from '@management/core/utils';
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './utils';

interface IAuth extends Request {
  username?: string;
}

interface IOptionalAuth extends IAuth {
  isAuth: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const auth = async (req: IAuth, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) throw {};

    const verified = verifyToken(token);

    if (!verified) throw {};

    req.username = verified.username;
    next();
  } catch (err) {
    console.log(err);

    res.status(401).json({ message: 'Unauthorized' });
  }
};

const optionalAuth = catchAsync(
  async (req: IOptionalAuth, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (token) {
      const verified = verifyToken(token);
      if (verified) req.username = verified.username;
    }

    next();
  }
);

export { auth, optionalAuth };
