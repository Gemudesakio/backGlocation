import Joi from "joi"
    const schemaCreate = Joi.object({
    nombre: Joi.string().required().messages({
        "string.base": "Project name must be a string.",
        "string.empty": "Project name cannot be empty.",
        "any.required": "Project name is a required field."
    }),

    descripcion: Joi.string().allow("").messages({
        "string.base": "Description must be a string.",
        "string.empty": "Description can be empty or omitted."
    }),

    estado: Joi.boolean().default(false).messages({
        "boolean.base": "Status must be a boolean value (true or false)."
    }),
    fechaInicio: Joi.date().iso().default(() => new Date()).messages({
        "date.base": "Start date must be a valid date.",
        "date.format": "Start date must follow ISO 8601 format (YYYY-MM-DD or ISO string).",
        "any.required": "Start date is required."
    }),

    fechaFin: Joi.date().iso().optional().allow(null).messages({
        "date.base": "End date must be a valid date.",
        "date.format": "End date must follow ISO 8601 format (YYYY-MM-DD or ISO string)."
    })
    });

export default schemaCreate;   