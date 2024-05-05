import express from "express";
const Router = express.Router()
import { MenuModel } from "../../Schema/menu/index.js";


/*
Route          /list
Des            Get the list of menu based on id
Params         _id
Access         Public
Method         GET
*/

Router.get("/list/:_id", async(req,res)=>{
    try {
        
        const {_id} = req.params
        const menus = MenuModel.findOne({_id})
        res.json({menus})
    
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})


/*
Route          /list
Des            Get the images of menu based on id
Params         _id
Access         Public
Method         GET
*/

Router.get("/image/_id", async (req,res)=>{
    try {
        const {_id} = req.params
        const menus = await MenuModel.findOne({_id})
        res.json({menus})

    } catch (error) {
        res.status(500),json({error: error.message})
    }
})
export default Router