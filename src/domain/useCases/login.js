const InvalidParamError = require('../../utils/errors/InvalidParamError')
const ServerError = require('../../utils/errors/ServerError')

class Login {
    constructor({ carregarUsuarioPorEmailRepository, geradorDeToken }) {
        this.carregarUsuarioPorEmailRepository = carregarUsuarioPorEmailRepository
        this.geradorDeToken = geradorDeToken
        if (!carregarUsuarioPorEmailRepository || carregarUsuarioPorEmailRepository.carregar) {
            throw new ServerError('O objeto carregarUsuarioPorEmailRepository é inválido!')
        }
        if (!this.geradorDeToken || this.geradorDeToken.gerar) {
            throw new ServerError('O objeto geradorDeToken é inválido!')
        }
    }
    async exec(email, senha) {
        if (!email) {
            throw new InvalidParamError('Email')
        }
        
        if (!senha) {
            throw new InvalidParamError('senha')
        }
        const usuario = await this.carregarUsuarioPorEmailRepository.carregar(email);

        if (usuario && (usuario.senha == senha)) {
            tokenDeAcesso = this.geradorDeToken.gerar(usuario.id)
            return tokenDeAcesso
        }

        return null
    }
}

module.exports = Login
