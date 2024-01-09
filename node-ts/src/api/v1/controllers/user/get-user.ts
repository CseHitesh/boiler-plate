import services from "../../services";
import utility from "../../utility";
import enums from '../../json/enum.json'
import messages from '../../json/message.json'

async function getUserController(req,res) {
    try {


        const {id}= req.query;

      if(!id){
                 const data4createResponseObject = {
                req: req,
                result: 0,
                message: messages.GENERAL_EROOR,
                payload: {},
                logPayload: false,
            
              };
            
            
            
              return res
                    .status(enums.HTTP_CODES.BAD_REQUEST)
                    .json(utility.createResponseObject(data4createResponseObject));
        }
        else{

            const user = await services.user.getUser("id")


            let payload = {
              user,
             
            };
          
            const data4createResponseObject = {
              req: req,
              result: 0,
              message: messages.LOGIN_SUCCESS,
              payload: payload,
              logPayload: false,
          
            };
          
          
          
            return res
                  .status(enums.HTTP_CODES.OK)
                  .json(utility.createResponseObject(data4createResponseObject));
          

        }
      

   
      
    } catch (error) {

    const responseCatchError = {
        req: req,
        result: -1,
        message: error.message,
        payload: {},
        logPayload: false,
      };
      return res
        .status(enums.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json(utility.createResponseObject(responseCatchError));
  
    }

}

export default getUserController;
