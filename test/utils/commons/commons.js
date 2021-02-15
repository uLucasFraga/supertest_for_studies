async function cadastrarCarrinho({
  url,
  idProduto,
  quantidade = 1,
  authorization,
}) {
  const { body } = await request(url)
    .post('/carrinhos')
    .set("authorization", authorization)
    .send({
      produtos: [
        {
          idProduto,
          quantidade,
        },
      ],
    })
    .expect(httpStatus.CREATED);
  return {
    idProduto,
    quantidade,
    _id: body._id,
  };
}

async function cadastrarProduto({
  url,
  nome = faker.commerce.productName() + faker.random.number(),
  preco = faker.commerce.price(),
  descricao = faker.random.words(),
  quantidade = faker.random.number(),
  authorization,
} = {}) {
  const { body } = await request(url)
    .post('/produtos')
    .send({
      nome,
      preco,
      descricao,
      quantidade,
    })
    .set('authorization', authorization)
    .expect(httpStatus.CREATED);
  return {
    nome,
    preco,
    descricao,
    quantidade,
    _id: body._id,
  };
}

async function cadastrarUsuario({
  url,
  nome = faker.name.findName(),
  email = faker.internet.email(),
  password = faker.internet.password(),
  administrador = `${faker.random.boolean()}`,
} = {}) {
  const { body } = await request(url)
    .post('/usuarios')
    .send({
      nome,
      email,
      password,
      administrador,
    })
    .expect(httpStatus.CREATED);
  return {
    nome,
    email,
    password,
    administrador,
    _id: body._id,
  };
}

function dadosProduto() {
  return {
    nome: faker.commerce.productName() + faker.random.number(),
    preco: faker.commerce.price(),
    descricao: faker.random.words(),
    quantidade: faker.random.number(),
    imagem: faker.random.words(),
  };
}

async function login(url, email, password) {
  const { body } = await request(url)
    .post('/login')
    .send({
      email,
      password,
    })
    .expect(httpStatus.OK);
  return body;
}

module.exports = {
  cadastrarCarrinho,
  cadastrarProduto,
  cadastrarUsuario,
  dadosProduto,
  login,
};
