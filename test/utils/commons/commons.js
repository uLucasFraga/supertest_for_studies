async function cadastrarCarrinho ({
  APP_URL,
  idProduto,
  quantidade = 1,
  authorization
}) {
  const { body } = await request(APP_URL)
    .post('/carrinhos')
    .set('authorization', authorization)
    .send({
      produtos: [
        {
          idProduto,
          quantidade
        }
      ]
    })
    .expect(httpStatus.CREATED)
  return {
    idProduto,
    quantidade,
    _id: body._id
  }
}

async function cadastrarProduto ({
  APP_URL,
  nome = faker.commerce.productName() + faker.random.number(),
  preco = faker.commerce.price(),
  descricao = faker.random.words(),
  quantidade = faker.random.number(),
  authorization
} = {}) {
  const { body } = await request(APP_URL)
    .post('/produtos')
    .send({
      nome,
      preco,
      descricao,
      quantidade
    })
    .set('authorization', authorization)
    .expect(httpStatus.CREATED)
  return {
    nome,
    preco,
    descricao,
    quantidade,
    _id: body._id
  }
}

async function cadastrarUsuario ({
  APP_URL,
  nome = faker.name.findName(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  administrador = `${faker.random.boolean()}`
} = {}) {
  const { body } = await request(APP_URL)
    .post('/usuarios')
    .send({
      nome,
      email,
      password,
      administrador
    })
    .expect(httpStatus.CREATED)
  return {
    nome,
    email,
    password,
    administrador,
    _id: body._id
  }
}

function dadosProduto () {
  return {
    nome: faker.commerce.productName() + faker.random.number(),
    preco: faker.commerce.price(),
    descricao: faker.random.words(),
    quantidade: faker.random.number(),
    imagem: faker.random.words()
  }
}

async function login (APP_URL, email, password) {
  const { body } = await request(APP_URL)
    .post('/login')
    .send({
      email,
      password
    })
    .expect(httpStatus.OK)
  return body
}

module.exports = {
  cadastrarCarrinho,
  cadastrarProduto,
  cadastrarUsuario,
  dadosProduto,
  login
}
