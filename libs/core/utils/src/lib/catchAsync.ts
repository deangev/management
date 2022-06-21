import { Request, Response, NextFunction } from 'express';

const catchAsync =
  (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch((err: any) => {
      if (err.response) {
        const { status, data } = err.response;
        res.status(status).json({ message: data.message });
      } else {
        res
          .status(500)
          .json({ message: err.errors || err.message || err || '' });
      }
    });
  };

export default catchAsync;