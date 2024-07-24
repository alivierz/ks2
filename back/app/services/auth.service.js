const userModel = require("../config/models/users.model");

module.exports = {
  createUserService: async (name, email) => {
    try {
      return await userModel
        .create({
          name,
          email,
          updatedat: new Date(),
        })
        .catch((_err) => {
          throw _err;
        });
    } catch (error) {
      throw error;
    }
  },

  getUserService: async (email, id) => {
    try {
      const WHERE_EMAIL = email ? { email } : {};

      const WHERE_ID = id ? { id } : {};
      return await userModel
        .findAll({
          attributes: ["id", "name", "email"],
          where: {
            ...WHERE_EMAIL,
            ...WHERE_ID,
          },
          raw: true,
        })
        .catch((_err) => {
          throw _err;
        });
    } catch (error) {
      throw error;
    }
  },

  getUserDetailService: async (id) => {
    try {
      return await userModel
        .findAll({
          attributes: ["id", "name", "email", "createdat"],
          where: {
            id,
          },
          raw: true,
        })
        .catch((_err) => {
          throw _err;
        });
    } catch (error) {
      throw error;
    }
  },

  getUserByIdService: async (id) => {
    try {
      if (!id) return false;
      return await userModel
        .findOne({
          attributes: ["id", "name", "email"],
          where: {
            id: id,
          },
          raw: true,
        })
        .catch((_err) => {
          throw _err;
        });
    } catch (error) {
      throw error;
    }
  },

  deleteUserService: async (id) => {
    try {
      return await userModel
        .destroy({
          where: {
            id,
          },
          raw: true,
        })
        .catch((_err) => {
          throw _err;
        });
    } catch (error) {
      throw error;
    }
  },

  updateUserService: async (id, name, email) => {
    try {
      const NAME = name ? { name } : {};
      const EMAIL = email ? { email } : {};
      return await userModel
        .update(
          {
            ...NAME,
            ...EMAIL,
          },
          {
            where: {
              id,
            },
            raw: true,
          }
        )
        .catch((_err) => {
          throw _err;
        });
    } catch (error) {
      throw error;
    }
  },
};
