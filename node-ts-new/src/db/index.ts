import mongoose, { Connection } from "mongoose";
import { config } from "../config/index";

/** @type {Connection | undefined} */
export let dbInstance: Connection | undefined;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${config.APP_DATABASE_URL}/${config.APP_DATABASE_NAME}` as string
    );
    dbInstance = connectionInstance.connection;
    console.log(
      `\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}\n`
    );
  } catch (error: any) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
