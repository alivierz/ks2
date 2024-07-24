"use strict";

const authRouter = require("./auth.router");

module.exports = (_app) => {
  _app.use(authRouter);
};
