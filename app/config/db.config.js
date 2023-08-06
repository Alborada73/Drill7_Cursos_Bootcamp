const sequelize = require("sequelize");
const configDB = new sequelize("db_bootcamp", "postgres", "yangulo", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});
module.exports = configDB;
