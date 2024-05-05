import orderModel from "../../Schema/allModels";
import express from "express"
const Router = express.Router()
import passport from "passport"
/*
Route          /
Des            Get all orders bsed on _Id
Params         _id
Access         Public
Method         GET
*/

Router.get("/:_id", passport.authenticate("jwt", {session: false}), async(req,res)=>{

    try {
        const {_id} = req.params
        const getOrder = orderModel.findOne({user : _id})

        if(!getOrder){
            return res.json({error: "User not found"})
        }
        res.json({getOrder})
    } 
    
    catch (error) {
        return res.status(500).json({error: error.message})
    }

})



export default Router