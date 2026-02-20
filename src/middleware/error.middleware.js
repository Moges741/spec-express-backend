const errorHandler = (err, req, res, next) => {
    res.status(400).json({
        err : err.message
    })
} 
export default errorHandler;