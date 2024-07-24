"use strict";

const {
  createUserController,
  getUsersController,
  getUserController,
  deleteUserController,
  updateUserController,
} = require("../controllers/auth.controller");
const {
  createUserDataValidate,
  userExistDataValidate,
  updateUserDataValidate,
} = require("../validators/auth.data.validate");

const Router = require("express").Router();

/**
 *
 * @version        :1.0.0
 * @description    :Servicio para crear un usuario en DB
 * @method         :POST
 * @type           :BODY
 * @param {String} email - correo de usario
 * @param {String} name -  nombre de usuario
 * @returns
 *
 */
Router.post("/users", createUserDataValidate, createUserController);

/**
 *
 * @version        :1.0.0
 * @description    :Servicio para listar todos los usuarios
 * @method         :GET
 * @type           :QUERY
 * @returns
 *
 */
Router.get("/users", getUsersController);

/**
 *
 * @version        :1.0.0
 * @description    :Servicio para detalle de un usuario
 * @method         :GET
 * @type           :QUERY
 * @returns
 *
 */
Router.get("/users/detail", userExistDataValidate, getUserController);

/**
 *
 * @version        :1.0.0
 * @description    :Servicio eliminar un suario
 * @method         :DELETE
 * @type           :PARAM
 * @returns
 *
 */
Router.delete("/users/:id", userExistDataValidate, deleteUserController);

/**
 *
 * @version        :1.0.0
 * @description    :Servicio para actualizar un usuario
 * @method         :PUT
 * @type           :BODY
 * @returns
 *
 */
Router.put("/users", updateUserDataValidate, updateUserController);

module.exports = Router;
