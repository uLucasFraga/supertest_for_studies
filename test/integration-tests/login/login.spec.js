const { assert } = require('chai')
const commons = require('../../utils/commons/commons.js')

const url = process.env.APP_URL
const email = process.env.EMAIL
const password = process.env.PASSWORD

describe('[INTEGRAÇÃO] :: LOGIN - teste de integração', () => {
  it('Login com sucesso', async () => {
    const { body } = await request(url)
      .post('/login')
      .send({
        email: email,
        password: password
      })
      .expect(httpStatus.OK)

    assert.deepEqual(body, {
      message: 'Login realizado com sucesso',
      authorization: 'Bearer ' + body.authorization.split(' ')[1]
    })
  })

  it('Login com email inválido', async () => {
    const { body } = await request(url)
      .post('/login')
      .send({
        email: "login.invalido.com",
        password: password
      })
      .expect(httpStatus.BAD_REQUEST)

    assert.deepEqual(body, { email: 'email deve ser um email válido' })
  })

  it('Login com senha errada', async () => {
    const { body } = await request(url)
      .post('/login')
      .send({
        email: email,
        password: 'senha_errada'
      })
      .expect(httpStatus.UNAUTHORIZED)

    assert.deepEqual(body, { message: 'Email e/ou senha inválidos' })
  })

  it('Login com email e senha errados', async () => {
    const { body } = await request(url)
      .post('/login')
      .send({
        email: 'lucas@algo.com',
        password: 'lucas'
      })
      .expect(httpStatus.UNAUTHORIZED)

    assert.deepEqual(body, { message: 'Email e/ou senha inválidos' })
  })

  it('Login sem preencher dados', async () => {
    const { body } = await request(url)
      .post('/login')
      .send({
        email: '',
        password: ''
      })
      .expect(httpStatus.BAD_REQUEST)

    assert.deepEqual(body, {
      email: 'email não pode ficar em branco',
      password: 'password não pode ficar em branco'
    })
  })

  it('Login com chave inválida', async () => {
    const { body } = await request(url)
      .post('/login')
      .send({ inexistente: '1' })
      .expect(httpStatus.BAD_REQUEST)

    assert.deepEqual(body, {
      email: 'email é obrigatório',
      password: 'password é obrigatório',
      inexistente: 'inexistente não é permitido'
    })
  })

  it('Login com sucesso com um novo usuário sendo cadastrado', async () => {
    const { email, password } = await commons.cadastrarUsuario({
      url,
      administrador: 'true'
    })
    const { body } = await request(url)
      .post('/login')
      .send({
        email,
        password
      })
      .expect(httpStatus.OK)

    assert.deepEqual(body, {
      message: 'Login realizado com sucesso',
      authorization: 'Bearer ' + body.authorization.split(' ')[1]
    })
  })
})
