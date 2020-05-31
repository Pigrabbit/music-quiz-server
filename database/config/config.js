require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USERNAME,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_DATABASE_HOST,
    dialect: 'mariadb',
    port: process.env.DEV_DATABASE_PORT,
    operatorAliases: false,
  },
  test: {
    username: process.env.TEST_DATABASE_USERNAME,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.TEST_DATABASE_HOST,
    dialect: 'mariadb',
    port: process.env.TEST_DATABASE_PORT,
    operatorAliases: false,
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: 'mariadb',
    port: process.env.DATABASE_PORT,
    operatorAliases: false,
  },
}