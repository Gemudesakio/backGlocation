const validator = (schema) => [
    (req, res, next) => {
    const { error, value } = schema.validate(req.body, { convert: true, abortEarly: true });
        if(error){
        return res.status(400).json({
            success: false,
            message: error.details.map(err => err.message)
        })
        }
    if (value.fechaInicio) value.fechaInicio = new Date(value.fechaInicio);
    if (value.fechaFin) value.fechaFin = new Date(value.fechaFin);
    req.body = value
    next()
    }
]

export default validator  
    
