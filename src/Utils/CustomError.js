class CustomError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.staus = statusCode < 500 ? "fail" : "error"
        this.operational = true

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = CustomError