import { Request, Response, NextFunction } from 'express';
import { serializeError } from 'serialize-error';

export default function catch_error(
    err: unknown,
    req: Request,
    res: Response,
    _next: NextFunction
) {
    res.status(500).send(serializeError(err));
}
