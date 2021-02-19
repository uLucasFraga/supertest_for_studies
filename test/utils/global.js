const Joi = require('@hapi/joi')
const httpStatus = require('http-status-codes')
const request = require('supertest')
const expect = require('chai').expect
require('dotenv').config({ path: '.env' })
const faker = require('faker')
const DEFAULT_TIMEOUT = 100000

global.Joi = Joi
global.httpStatus = httpStatus
global.request = request
global.expect = expect
global.faker = faker
global.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT
