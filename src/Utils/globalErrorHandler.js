module.exports = function(error, req, res, next){
    console.log(error)
    error.status = error.status || 'error'
    error.statausCode = error.statusCode || 500

    return res.status(error.statausCode).json({
        "status": error.statusCode < 500 ? "fail" : "error",
        "statusCode" : error.statusCode,
        "message" : error.message,
        "error" : error
    })
}