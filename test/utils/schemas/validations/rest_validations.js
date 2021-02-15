const restValidations = {
  ID: Joi.string().regex(/^[a-zA-Z0-9]/),
  UUID: Joi.string().guid(),
  STRING_NOT_NULL: Joi.string(),
  STRING_ALLOW_NULL: Joi.string().allow('', null),
  ISODATE: Joi.string().isoDate(),
  ISODATE_ALLOW_NULL: Joi.string().isoDate().allow('', null),
  BOOLEAN: Joi.boolean().truthy('yes').falsy('no').sensitive(),
  BOOLEAN_ALLOW_NULL: Joi.boolean().truthy('yes').falsy('no').sensitive().allow('', null),
  NUMBER: Joi.number(),
  NUMBER_UNSAFE: Joi.number().unsafe(),
  NUMBER_ALLOW_NULL: Joi.number().allow('', null),
  EMAIL_ALLOW_NULL: Joi.string().email().allow('', null),
  EMAIl: Joi.string().email(),
  IP: Joi.string().ip({ version: 'ipv4' }).allow('', null),
  ARRAY_ALLOW_NULL: Joi.array().allow('', null),
  ARRAY_NOT_NULL: Joi.array(),
  BASE_64: Joi.string().base64(),
  URL_FORMAT: Joi.string().uri({
    scheme: ['www', 'https', 'http']
  })
}

module.exports = restValidations
