import { movieSchema } from "../schema/movieSchema.js";
import { Request, Response, NextFunction } from "express";

function movieValidation(req: Request, res: Response, next: NextFunction) {
    const { error } = movieSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors: string[] = error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }

    res.locals.body = req.body;

    next()
}

export { movieValidation };