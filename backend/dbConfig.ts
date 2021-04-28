'use strict'

const env = require('node-env-file')
env(`${__dirname}/.env`)

module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_TYPE || 'postgres',
  migrationStorage: 'json',
  migrationStoragePath: 'sequelizeMeta.json',
}