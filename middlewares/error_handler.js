const error_handler = (err, req, res, next) => {
    console.error('Error atrapado por middleware:', err);

    res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    details: err.details || null,
    });
};

export default error_handler;
