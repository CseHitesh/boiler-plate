import models from "../../models";

async function createUser(userData) {
    try {
      const user = await models.User.create({
        ...userData
      })
      return user;
    } catch (error) {
      throw error;
    }

}

export default createUser;
