const APP_URL = process.env.APP_URL;
const carrinhos = require("../../utils/schemas/carrinhos-schema");

describe("[CONTRATO] :: CARRINHOS - teste de contrato", () => {
  it("/GET deve validar o contrato (schema) do endpoint de carrinhos", async () => {
    await request(APP_URL)
      .get("/carrinhos")
      .timeout({ response: DEFAULT_TIMEOUT, deadline: DEFAULT_TIMEOUT })
      .then((result) => {
        expect(result.statusCode).to.equal(httpStatus.OK);
        Joi.assert(result.body, carrinhos.carrinhosList);
      });
  });
});
