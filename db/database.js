const Sequelize = require("sequelize");
const mariadb = require("mariadb");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: "mariadb",
    operatorsAliases: false,
  }
);

module.exports = sequelize;
global.sequelize = sequelize;
