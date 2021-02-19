const url = process.env.APP_URL;
const produtos = require("../../utils/schemas/produtos-schema");

describe("[CONTRATO] :: PRODUTOS - teste de contrato", () => {
  it("/GET deve validar o contrato (schema) do endpoint de produtos", async () => {
    await request(url)
      .get("/produtos")
      .timeout({ response: DEFAULT_TIMEOUT, deadline: DEFAULT_TIMEOUT })
      .then((result) => {
        expect(result.statusCode).to.equal(httpStatus.OK);
        Joi.assert(result.body, produtos.produtosList);
      });
  });
});
