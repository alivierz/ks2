const {
  createUserService,
  getUserService,
  deleteUserService,
  updateUserService,
  getUserDetailService,
} = require("../services/auth.service");

module.exports = {
  createUserController: async (_req, _res) => {
    try {
      const { name, email } = _req.body;

      await createUserService(name, email).catch((_error) => {
        throw _error;
      });

      return _res.status(200).json({
        data: true,
        message: "usuario creado correctamente.",
      });
    } catch (_error) {
      return _res.status(400).send(_error);
    }
  },

  getUsersController: async (_req, _res) => {
    try {
      const USERS = await getUserService().catch((_error) => {
        throw _error;
      });

      return _res.status(200).json({
        data: USERS,
        message: "listado de usuarios",
      });
    } catch (_error) {
      return _res.status(400).send(_error);
    }
  },

  getUserController: async (_req, _res) => {
    try {
      const { id } = _req.query;

      const USERS = await getUserDetailService(id).catch((_error) => {
        throw _error;
      });

      return _res.status(200).json({
        data: USERS[0],
        message: "detalle de usuario.",
      });
    } catch (_error) {
      return _res.status(400).send(_error);
    }
  },

  deleteUserController: async (_req, _res) => {
    try {
      const { id } = _req.params;

      await deleteUserService(+id).catch((_error) => {
        throw _error;
      });

      return _res.status(200).json({
        data: true,
        message: "Usuario eliminado correctamente.",
      });
    } catch (_error) {
      return _res.status(400).send(_error);
    }
  },

  updateUserController: async (_req, _res) => {
    try {
      const { id, name, email } = _req.body;

      await updateUserService(id, name, email).catch((_error) => {
        throw _error;
      });

      return _res.status(200).json({
        data: true,
        message: "Usuario actualizado correctamente.",
      });
    } catch (_error) {
      return _res.status(400).send(_error);
    }
  },
};
