import UserModel from "../features/user/user.model";

const basicAuthorizer = (req,res, next) =>{
    //1. Check if autherization header is empty

    const authHeader = req.headers["authorization"];

    if(!authHeader){

        req.status(400).send('No authorization details found ');

    }

    //2. Extract the credetials.
    const basic64Credentials = authHeader.replace('Basic ', '');
    console.log(basic64Credentials);

    const creds = decodedCreds.split(':');

    const user = UserModel.getAll.find(u => u.email == creds[0] && u.password == creds[1]);
    if(user){
        next();
    }
    else{
       return res.status(401).send("Incorrect Credetials");
    }
}

export default basicAuthorizer;