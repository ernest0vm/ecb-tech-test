const fs = require('fs')
const env = require('node-env-file')
const { Sequelize } = require('sequelize');

if (fs.existsSync(`${__dirname}/.env`)) {
  env(`${__dirname}/.env`)
} else {
  env(`${__dirname}/../.env`)
}

const configDb = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  dialect: process.env.DB_TYPE || 'postgres',
  operatorsAliases: 0
}
// console.log(JSON.stringify(configDb))
const db = new Sequelize(`postgres://${configDb.username}:${configDb.password}@${configDb.host}:${configDb.port}/${configDb.database}`)
export default db
