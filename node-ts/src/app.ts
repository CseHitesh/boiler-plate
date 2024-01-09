import config from "./api/v1/config";
import express from "express";
import routes from "./api/v1/routes"
import { connectToMongo } from "./api/v1/database/db";
import bodyParser from "body-parser";
import cors from 'cors'
import cronJob from "./api/v1/cron/cron";
import utility from "./api/v1/utility";



async function startServer() {
  const app = express();

  //cron jobs execution
  cronJob()

  //Database connection 

  connectToMongo();

  //for cors error
  app.use(cors())

  // Parse URL-encoded bodies
  app.use(bodyParser.urlencoded({ extended: false }));

  // Parse JSON bodies
  app.use(bodyParser.json());

  app.get('/',(req,res)=>{
    res.send('Experimental server is working')
  })

  app.use(config.api.prefix, routes());

  app.listen(config.port, () => {
    console.log("App is working on Port", config.port);
  });
}

startServer();








