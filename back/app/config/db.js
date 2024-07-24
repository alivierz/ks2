const { Sequelize } = require("sequelize");

const DatabasePg = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || "no_database",
  username: process.env.DB_USER || "no_user",
  password: process.env.DB_PASS || "no_password",
  //   timezone: process.env.DB_TIME_ZONE,
  logging: process.env.DB_SHOW_LOGS == "true" ? console.log : false,
  logQueryParameters: true,
  pool: {
    max: parseInt(process.env.DB_POLL_MAX) || 20,
    min: parseInt(process.env.DB_POLL_MIN) || 5,
    idle: parseInt(process.env.DB_POLL_IDLE) || 5000,
  },
});

module.exports = DatabasePg;
