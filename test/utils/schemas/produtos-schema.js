const validation = require('./validations/rest_validations')

const produtosList = Joi.object().keys({
  quantidade: validation.NUMBER.required(),
  produtos: Joi.array().items({
    nome: validation.STRING_NOT_NULL.required(),
    preco: validation.NUMBER.required(),
    descricao: validation.STRING_NOT_NULL.required(),
    quantidade: validation.NUMBER.required(),
    _id: validation.ID.required()
  })
})

module.exports = {
  produtosList
}
