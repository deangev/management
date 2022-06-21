import { catchAsync } from '@sagi/core/utils';
import { Response } from 'express';

const getEstates = catchAsync(async (req: Request, res: Response) => {
  // const estatesRes = await Estate

  res.status(200).json([]);
});

export { getEstates };
