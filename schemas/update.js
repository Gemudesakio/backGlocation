import Joi from "joi";

const schemaUpdate = Joi.object({
    nombre: Joi.string().messages({
        "string.base": "Project name must be a string.",
        "string.empty": "Project name cannot be empty."
    }),

    descripcion: Joi.string().allow("").messages({
        "string.base": "Description must be a string."
    }),

    estado: Joi.boolean().messages({
        "boolean.base": "Status must be a boolean value (true or false)."
    }),

    fechaInicio: Joi.date().iso().messages({
        "date.base": "Start date must be a valid date.",
        "date.format": "Start date must follow ISO 8601 format (YYYY-MM-DD or ISO string)."
    }),

    fechaFin: Joi.date().iso().allow(null).messages({
        "date.base": "End date must be a valid date.",
        "date.format": "End date must follow ISO 8601 format (YYYY-MM-DD or ISO string)."
    })
}).min(1) //asegura que al menos un campo sea enviado
    .messages({
        "object.min": "You must provide at least one field to update."
});

export default schemaUpdate;
