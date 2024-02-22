import { Request, Response, NextFunction } from 'express';

export default function catch_all(
    req: Request,
    res: Response,
    _next: NextFunction
) {
    res.status(404).send('Sorry, you are not authorized');
}
