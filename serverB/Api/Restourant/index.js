import {RestaurantModel} from "../../Schema/restaurant/index.js";
import express from "express"
import { ValidateResSearchString, ValidateResaurentCity } from "../../Validation/Restaurent.js";
import { ValidateResaurentId } from "../../Validation/Food.js";
const Router = express.Router()


/*
Route          /
Des            Get all restourant details
Params         None
Access         Public
Method         GET
*/

Router.get("/", async (req,res)=>{
    try {
        await ValidateResaurentCity(req.query)
        const {city} = req.query;
        const restaurants = RestaurantModel.findOne({city})
        res.json({restaurants})

    } catch (error) {
       return res.status(500).json({error: error.message})
    }
})

/*
Route          /
Des            Get particular restaurant details on id
Params         _id
Access         Public
Method         GET
*/
Router.get("/:_id", async(req,res)=>{
    try {

        await ValidateResaurentId(req.params)
        const {_id} = req.params
        const restaurant = RestaurantModel.findOne({_id})
    
        if(!restaurant){
            res.status(404).json({error: "restaurant i not found!!!"})
        }
        else{
            res.json({restaurant})
        }
    
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})


/*
Route          /
Des            Get restaurant details on search
Params         NONE
Body           SearchString
Access         Public
Method         GET
*/

Router.get("/search", async (req,res)=>{
    try {

        await ValidateResSearchString(req.body)
        const {searchString} = req.body;
        const restaurant = await RestaurantModel.find({
            name: {$regex : searchString, $option: "i"}
        })

        return res.json({restaurant})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})


export default Router