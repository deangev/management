import { Request, Response } from "express";

export const catchAsync = (fn: any) => (req: Request, res: Response) => fn(req, res).catch((err: any) => res.status(400).json({err}))