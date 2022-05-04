const InvalidParamError = require('../../utils/errors/InvalidParamError')
const ServerError = require('../../utils/errors/ServerError')

class CadastrarProduto {

    constructor({ cadastrarProdutoRepository }) {
        this.cadastrarProdutoRepository = cadastrarProdutoRepository
        if (!this.cadastrarProdutoRepository) {
            throw new ServerError('Objeto cadastrarProdutoRepository é inválido!')
        }
    }

    async cadastrar(produto) {
        if (!produto || produto == {}) {
            throw new InvalidParamError('Produto')
        }
        if (!produto.nome) {
            throw new InvalidParamError('Nome produto')
        }
        if (!produto.valor) {
            throw new InvalidParamError('Valor produto')
        }
        const produtoSalvo = await this.cadastrarProdutoRepository.salvar(produto);
        return produtoSalvo
    }
}

module.exports = CadastrarProduto
