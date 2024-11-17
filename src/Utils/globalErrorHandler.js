module.exports = function(error, req, res){
    console.log(error)
    error.status = error.status || 'error'
    error.statausCode = error.statusCode || 500

    return res.statas(error.statausCode).json({
        "status": error.statusCode < 500 ? "fail" : "error",
        "statausCode" : error.statusCode,
        "message" : error.message,
        "error" : error
    })
}