const InvalidParamError = require("../utils/errors/InvalidParamError");
const mySqlHelper = require('./MySqlHelper')

class CarregarUsuarioPorEmailMySqlRepository {
    async carregar(email) {
        if (!email) {
            throw new InvalidParamError('email')
        }
        const User = await mySqlHelper.getDb.find({ email: email })
        return User
    }
}

module.exports = CarregarUsuarioPorEmailMySqlRepository
