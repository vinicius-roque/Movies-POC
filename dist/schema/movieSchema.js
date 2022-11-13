import Joi from "joi";
var movieSchema = Joi.object({
    name: Joi.string().min(1).required(),
    streaming: Joi.string().valid('Netflix', 'Prime', 'Disney', 'HBO Max', 'Star+').required(),
    genre: Joi.string().valid('Comedy', 'Horror', 'Action', 'Cartoon', 'Science Fiction').required(),
    status: Joi.string().valid('Watched', 'Not watched').required()
});
export { movieSchema };
