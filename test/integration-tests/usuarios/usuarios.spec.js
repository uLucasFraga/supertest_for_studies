const { assert } = require('chai')

const APP_URL = process.env.APP_URL
const nameFaker = faker.name.firstName()
const emailFaker = faker.internet.email()
const passFaker = faker.internet.password(5, 10)

describe('[INTEGRAÇÃO] :: USUÁRIOS - teste de integração', () => {
  it('Cadastrar um novo usuário com sucesso', async () => {
    const { body } = await request(APP_URL)
      .post('/usuarios')
      .send({
        nome: nameFaker,
        email: emailFaker,
        password: passFaker,
        administrador: `${faker.random.boolean()}`
      })
      .expect(httpStatus.CREATED)

    assert.deepEqual(body, {
      message: 'Cadastro realizado com sucesso',
      _id: body._id
    })
  })

  it('Cadastrar um novo usuário com email já usado', async () => {
    const { body } = await request(APP_URL)
      .post('/usuarios')
      .send({
        nome: nameFaker,
        email: emailFaker,
        password: passFaker,
        administrador: `${faker.random.boolean()}`
      })
      .expect(httpStatus.BAD_REQUEST)

    assert.deepEqual(body, { message: 'Este email já está sendo usado' })
  })

  it('Cadastrar um novo usuário com email inválido', async () => {
    const { body } = await request(APP_URL)
      .post('/usuarios')
      .send({
        nome: nameFaker,
        email: 'email_invalido.com',
        password: passFaker,
        administrador: `${faker.random.boolean()}`
      })
      .expect(httpStatus.BAD_REQUEST)

    assert.deepEqual(body, { email: 'email deve ser um email válido' })
  })

  it('Cadastrar um novo usuário sem nome, email, senha e o admin com boolean fora das aspas', async () => {
    const { body } = await request(APP_URL)
      .post('/usuarios')
      .send({
        administrador: false
      })
      .expect(httpStatus.BAD_REQUEST)

    assert.deepEqual(body, {
      nome: 'nome é obrigatório',
      email: 'email é obrigatório',
      password: 'password é obrigatório',
      administrador: "administrador deve ser 'true' ou 'false'"
    })
  })
})
