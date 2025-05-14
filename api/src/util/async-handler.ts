import { NextFunction, Request, Response } from "express";

type ControllerFn = (req: Request, res: Response) => Promise<void>;

export const asyncHandler = (action: ControllerFn) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await action(req, res);
    } catch (error) {
        next(error);
    }
};