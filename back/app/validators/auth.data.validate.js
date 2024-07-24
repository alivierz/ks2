const {
  getUserService,
  getUserByIdService,
} = require("../services/auth.service");

module.exports = {
  createUserDataValidate: async (_req, _res, _next) => {
    try {
      const { email, name } = _req.body;

      if (!name) {
        return _res.status(400).json({
          data: false,
          message: "Debe enviar un nombre",
        });
      }

      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (!email || !regexEmail.test(email)) {
        return _res.status(400).json({
          data: false,
          message: "Debe enviar un correo valido",
        });
      }

      const USER = await getUserService(email).catch((_err) => {
        throw _err;
      });
      if (USER.length > 0) {
        return _res.status(400).json({
          data: email,
          message: "Este correo ya se encentra en uso",
        });
      }

      return _next();
    } catch (error) {
      return _res.send({ ...error });
    }
  },

  userExistDataValidate: async (_req, _res, _next) => {
    try {
      const { id } = _req.params;

      const USER = await getUserByIdService(id).catch((_err) => {
        throw _err;
      });
      if (!USER) {
        return _res.status(400).json({
          data: id,
          message: "El usario no existe",
        });
      }

      return _next();
    } catch (error) {
      return _res.send({ ...error });
    }
  },

  updateUserDataValidate: async (_req, _res, _next) => {
    try {
      const { id, email } = _req.body;

      const USER = await getUserByIdService(id).catch((_err) => {
        throw _err;
      });

      if (!USER) {
        return _res.status(400).json({
          data: id,
          message: "El usario no existe",
        });
      }

      if (email) {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regexEmail.test(email)) {
          return _res.status(400).json({
            data: false,
            message: "Debe enviar un correo valido",
          });
        }

        const EMAIL = await getUserService(email).catch((_err) => {
          throw _err;
        });

        if (EMAIL.length > 0) {
          return _res.status(400).json({
            data: id,
            message: "El correo ya esta en uso",
          });
        }
      }

      return _next();
    } catch (error) {
      return _res.send({ ...error });
    }
  },
};
