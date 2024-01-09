import config from "../config/index"
import {connect} from 'mongoose'
export const connectToMongo = () => {

    connect(config.databaseURL)
      .then(() => console.log(" connected with db successfully"))
      .catch((error) => console.log(error.message));
}








