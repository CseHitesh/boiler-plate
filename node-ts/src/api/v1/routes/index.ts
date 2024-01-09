import { Router } from 'express';
import user from './user/user';



const route = Router();

export default () => {

  user(route);
 
  return route
};
