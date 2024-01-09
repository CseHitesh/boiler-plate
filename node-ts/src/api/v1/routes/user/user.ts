import { Router, Request, Response } from "express";
import  Controller from '../../controllers'
const route = Router();

const  user = (app: Router) => {
  /**
   * @swagger
   * tags:
   *   name: User
   *   description: User management and login
   */
  app.use("/user", route);

  /**
   * @swagger
   * /superadmin/register:
   *   Post:
   *     tags: [User]
   *     summary: Register user
   *     description: Registering superadmin user.
   */
  route.post("/",  Controller.User.addUserController);
  /**
   * @swagger
   * /superadmin/register:
   *   Post:
   *     tags: [User]
   *     summary: Register user
   *     description: Registering superadmin user.
   */
  route.get("/",  Controller.User.getUserController);
 
};
export default  user;