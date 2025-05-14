import { NextFunction, Request, Response } from "express";
import { HttpError } from "../exception/http.error";
import { InternalServerError } from "../exception/internal-server.error";

function normalizeError(err: unknown) {
    if (err instanceof HttpError) {
        return err;
    }

    return new InternalServerError(err);
}

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }

    const error = normalizeError(err);

    const { statusCode, body } = error;

    res.status(statusCode).json(body);
};