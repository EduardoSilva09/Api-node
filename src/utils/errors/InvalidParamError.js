class InvalidParamError {
    constructor(message, statusCode) {
        this.message = message
        this.statusCode = statusCode
    }
}
module.exports = InvalidParamError