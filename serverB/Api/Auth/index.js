import express from "express";
import { UserModel } from "../../Schema/allModels.js";
import { ValidateSignup, ValidateSignin } from "../../Validation/Auth.js";

const Router = express.Router();

/*
Routes        signup
Deescription  Signup with email and password
Params        NONE
Access        PUBLIC
METHOD        POST
*/
Router.post("/signup", async(req, res) =>{
    try{

        await ValidateSignup(req.body.credentials)
        await UserModel.findEmailAndPhone(req.body.credentials);
        // DB
        const newUser = await UserModel.create(req.body.credentials);

        // jwt Auth ftoken
        const token = newUser.generateJwtToken()

        res.json({message:"server starts"})
        
        return res.status(200).json({token})
    }

    catch(error){
        return res.status(500).json({error: error.message})
    }
})



/*
Routes    signin
Deescription  Signin with email and password
Params        NONE
Access        PUBLIC
METHOD        POST
*/
Router.post("/signin", async(req, res) =>{
    try{

        await ValidateSignin(req.body.credentials)
        const user  = await UserModel.FindByEmailAndPassword(req.body.credentials)
        // DB
        const token = user.generateJwtToken()
        return res.status(200).json({token, status:"success"})
    }
    catch(error){
        return res.status(500).json({error: error.message})
    }
})

/*
Routes        /google
Deescription  google signin
Params        NONE
Access        PUBLIC
METHOD        POST
*/
// Router.get("/google", passport.authenticate("google",{
//     scope: [
//         "http://www.googleapis.com/auth/userinfo.profile",
//         "http://www.googleapis.com/auth/userinfo.email"
//     ],
    
// }))

/*
Routes        /google/callback
Deescription  google signin
Params        NONE
Access        PUBLIC
METHOD        POST
*/
// Router.get("/google/callback", passport.authenticate("google",{failureRedirect : "/"}),
// (req,res)=>{
//     return res.json({token: req.session.passport.user.token})
// })

export default Router;