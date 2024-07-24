"use strict";
const Sequelize = require("sequelize");
const DB_CON = require("../db");

const Model = DB_CON.define(
  "users",
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: Sequelize.STRING(255),
    email: Sequelize.STRING(255),
    createdat: { type: Sequelize.DATE, defaultValue: new Date() },
    updatedat: Sequelize.DATE,
  },
  { tableName: "users", schema: "public", timestamps: false }
);
module.exports = Model;
