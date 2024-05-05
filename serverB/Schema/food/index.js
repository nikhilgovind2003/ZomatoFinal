import mongoose from "mongoose";

const FoodSchema = mongoose.Schema({
    name:{type: String, required: true},
    description:{type: String, required: true},
    isVeg:{type: Boolean, required: true},
    isContainEgg:{type: Boolean, required: true},
    catogory:{type: String, required: true},
    photos:[
         {type: mongoose.Types.ObjectId, ref: "Images"}
    ],
    price:  {type: Number, default: "150", require:true},
    addOn: [
        {
            type: mongoose.Types.ObjectId, ref: "Foods"
        }
    ]
},
{
    timestamps:  true
})


export const FoodModel = mongoose.model("Foods", FoodSchema);