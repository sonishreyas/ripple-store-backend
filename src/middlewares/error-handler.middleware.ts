export const ErrorHandler = (error, req, res, next) => {
    console.log(error.stack);
    res.status(500).json({
        success: false,
        message: error.message 
    })
}