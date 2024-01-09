import logger from "./logger";
// const _ = require("lodash");
// const flatten = require("flat");


const createResponseObject = ({
    req,
    result = 0,
    message = "",
    payload = {},
    logPayload = false,
  }) => {
    // let payload2log = {};
    // if (logPayload) {
    // //   payload2log = flatten({ ...payload });
    // }
  
    let messageToLog = `RES [${req.requestId}] [${req.method}] ${req.originalUrl}`;


    if(logPayload){
      messageToLog += JSON.stringify(payload)
    }



    if (result < 0) {
      logger.error(messageToLog);
    
    } else  {
      logger.info(messageToLog);
     
    }
  
    return { result: result, message: message, payload: payload };
  };
  
  export default createResponseObject