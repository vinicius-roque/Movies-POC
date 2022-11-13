import { movieSchema } from "../schema/movieSchema.js";
function movieValidation(req, res, next) {
    var error = movieSchema.validate(req.body, { abortEarly: false }).error;
    if (error) {
        var errors = error.details.map(function (detail) { return detail.message; });
        return res.status(422).send(errors);
    }
    res.locals.body = req.body;
    next();
}
export { movieValidation };
