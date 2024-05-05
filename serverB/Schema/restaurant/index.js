import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name: {type:String, required:true},
    address: {type:String, required:true},
    city: {type:String, required:true},
    mapLocattion: {type:String, required:true},
    coisine: [String],
    RestaurantTiming: String,
    contactNumber: Number,
    weebsite: String,
    popularDishes: Number,
    amenities: [String],
    menuImages: [
        {type: mongoose.Types.ObjectId, ref: "Images"}
    ],
    menu: [
        {type: mongoose.Types.ObjectId, ref: "Menus"}
    ]

},
{
    timestamps:  true
})

export const RestaurantModel = mongoose.model("Restautants", RestaurantSchema)
