import models from "../../models";

async function getUser(id) {
    try {
      const user = await models.User.findById(id)
      return user;
    } catch (error) {
      throw error;
    }

}

export default getUser;
