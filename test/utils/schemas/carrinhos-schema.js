const validation = require('./validations/rest_validations')

const carrinhosList = Joi.object().keys({
  quantidade: validation.NUMBER.required(),
  carrinhos: Joi.array().items({
    produtos: Joi.array().items(
      Joi.object({
        idProduto: validation.STRING_NOT_NULL.required(),
        quantidade: validation.NUMBER.required(),
        precoUnitario: validation.NUMBER.required()
      })
    ),
    precoTotal: validation.NUMBER.required(),
    quantidadeTotal: validation.NUMBER.required(),
    idUsuario: validation.ID.required(),
    _id: validation.ID.required()
  })
})

module.exports = {
  carrinhosList
}
