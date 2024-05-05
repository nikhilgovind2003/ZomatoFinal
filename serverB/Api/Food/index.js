import express from "express";
import  { FoodModel } from "../../Schema/allModels.js";
import { ValidateCategory, ValidateResaurentId } from "../../Validation/Food.js";

const Router = express.Router()

/*
Route          /
Des            Get all foods debased on particular restaurant 
Params         _id
Access         Public
Method         GET
*/
Router.get("/:_id", async(req,res)=>{

    try {
        await ValidateResaurentId(req.params)
        const {_id} = req.params
        const foods = FoodModel.findOne({ restaurant: _id})
        res.json({foods})
    } 
    
    catch (error) {
        return res.status(500).json({error: error.message})
    }

})


/*
Route          /r
Des            Get restaurant details on search
Params         category
Access         Public
Method         GET
*/

Router.get("/r/:category", async (req,res)=>{
    try {
        await ValidateCategory(req.params)
        const {category} = req.body;
        const foods = await FoodModel.find({
            name: {$regex : category, $option: "i"}
        })

        return res.json({foods})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})


export default Router

