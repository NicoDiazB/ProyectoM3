import { NextFunction, Request, Response } from "express";


const catchAsync = (controller:any ) => {
    return (req: Request, res: Response, next: NextFunction) => {
      controller(req, res).catch((err: any) => next(err));
    };
  };

export default catchAsync;