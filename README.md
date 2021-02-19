# SUPERTEST-FOR-STUDIES

[![QA CI](https://github.com/uLucasFraga/supertest_for_studies/workflows/QA%20CI/badge.svg?branch=main)](https://github.com/uLucasFraga/supertest_for_studies/actions/)
[![ServeRest API](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/PauloGoncalvesBH/ServeRest/)

---

Repositório com exemplos de teste automatizado para API utilizando os frameworks: supertest, mocha e chai

> O **SuperTest** vem para fornecer uma abstração de alto nível para testar HTTP: [CONHECER SUPERTEST](https://github.com/visionmedia/supertest)

**Nota:** Incluímos a lib **Joi** para testarmos os schemas e realizarmos testes de contrato deixando o repositório mais completo

> O Joi é a linguagem de descrição de _schema_ mais poderosa e o validador de dados para JavaScript: [CONHECER JOI](https://hapi.dev/module/joi/)

---

## Tabela de contexto

> Índice `README`.

  - [Pré Requisitos](#pré-requisitos)
  - [Configuração](#configuração)
  - [Instalação](#instalação)
  - [Como Testar](#como-testar)
  - [Report](#report)
  - [Suporte](#suporte)
  - [Licença](#licença)

---

## Pré Requisitos

- [Instalar Node e NPM](https://nodejs.org/en/)
- [Instalar Vscode ou outra IDE](https://code.visualstudio.com/download)
- [Instalar SuperTest](https://www.npmjs.com/package/supertest)
- [Instalar Joi](https://hapi.dev/module/joi/)

## Configuração

- Criar ou usar o arquivo _package.json_ para baixar/instalar suas dependências

## Instalação

> Clonar projeto

- Clonar localmente em sua máquina usando ssh ou https, por exemplo:

`git clone https://github.com/uLucasFraga/supertest_for_studies.git`

- Instalar todas as dependências via package.json, por exemplo:

`cd /raiz_do_seu_projeto`

`npm run simple_build`

> Dicas

- Utilize de forma versionada o seu package.json para instalar as dependências do seu projeto

## Como Testar

Antes de rodar os testes precisaremos:

- Criar um arquivo `.env` na raiz do projeto e inserir valores válidos
- Seguir o padrão pré estabelicido no arquivo `.env.example`

Os valores estarão com o usuário que já tenha testado este repositório anteriormente.

exemplo:
```
APP_URL=url_valida
TOKEN=token_valido
EMAIL=email_valido
PASSWORD=pass_valido
```

> Subir **servidor_rest** para realizar os testes

`npm run start:server`

> Rodar testes

`npm test`

> Para limpar projeto, instalar as dependencias e rodar todos os testes

`npm run i:tests`

> Para rodar um conjunto individual de testes

`npm run test:<microserviço> ou <API>`

exemplos:

```bash
    test:{sua_tag} - para rodar alguns testes que contenham a tag {@sua_tag}
    test:integrations - para rodar os testes de integração
    test:contracts - para rodar todos os testes de contrato
    test:contracts:produtos - para rodar os testes de contrato da API de produtos
    test:integrations:produtos - para rodar os testes de integração da API de produtos
    test:integrations:report - para rodar os testes de integração e gerar um reporte
    test:contracts:report - para rodar os testes de contrato e gerar um reporte
```

### OBSERVAÇÃO:
Por ser um repositório para testarmos alguns microserviços, foi elaborada uma configuração para executá-los de forma individual.
Por isso, podemos incluir diferentes **scprits** para utilizarmos em diferentes projetos via CI.


> Para limpar o projeto:

`npm run clean`

> Para limpar e instalar as dependências do projeto

`npm run simple_build`

> Para stopar/terminar o servidor_rest

`npm run stop:server`

## Reporte

> Rodar testes e visualizar reporte gerado

`npm run test:<microserviço/API>-report`

## Suporte

- Twitter at <a href="https://twitter.com/uLucasFraga" target="_blank">`@ulucasfraga`</a>
- Facebook at <a href="https://www.facebook.com/lucass.fragaa" target="_blank">`my_facebook`</a>
- Linkedin at <a href="https://www.linkedin.com/in/ulucasfraga" target="_blank">`my_linkedin`</a>

- E-mail: `lucass.fragaa@gmail.com`
- Skype: `live:lucass.fragaa`

---

## Licença

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © <a href="https://www.linkedin.com/in/ulucasfraga" target="_blank">Lucas Fraga</a>.
