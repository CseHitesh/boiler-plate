import services from "../../services";
import utility from "../../utility";
import enums from '../../json/enum.json'
import messages from '../../json/message.json'

async function addUserController(req,res) {
    try {

      console.log("user contoller");

      const user = await services.user.createUser(req.body)


  let payload = {
    user,
    admin: "admin",
    token: "jwt.sign(data4token, jwtOptions.secretOrKey)",
    token_type: "Bearer",
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


      
    } catch (error) {

    const responseCatchError = {
        req: req,
        result: -1,
        message: messages.GENERAL_EROOR,
        payload: {},
        logPayload: false,
      };
      return res
        .status(enums.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json(utility.createResponseObject(responseCatchError));
  
    }

}

export default addUserController;
