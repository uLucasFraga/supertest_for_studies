const { assert } = require('chai')
const commons = require('../../utils/commons/commons.js')

const url = process.env.APP_URL
const emailValid = process.env.EMAIL_VALID
const emailInvalid = process.env.EMAIL_INVALID
const passValid = process.env.PASSWORD_VALID

describe('[INTEGRAÇÃO] :: LOGIN - teste de integração', () => {
  it('Login com sucesso', async () => {
    const { body } = await request(url)
      .post('/login')
      .send({
        email: emailValid,
        password: passValid
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
        email: emailInvalid,
        password: passValid
      })
      .expect(httpStatus.BAD_REQUEST)

    assert.deepEqual(body, { email: 'email deve ser um email válido' })
  })

  it('Login com senha inválida', async () => {
    const { body } = await request(url)
      .post('/login')
      .send({
        email: emailValid,
        password: 'senha_errada'
      })
      .expect(httpStatus.UNAUTHORIZED)

    assert.deepEqual(body, { message: 'Email e/ou senha inválidos' })
  })

  it('Login com email e senha inválidos', async () => {
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
