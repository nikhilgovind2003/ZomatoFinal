import mongoose from "mongoose"


const ReviewSchema = mongoose.Schema({
    food: {type: mongoose.Types.ObjectId, ref: "Foods"},
    restaurant: {type: mongoose.Types.ObjectId, ref: "Restaurants"},
    user: {type: mongoose.Types.ObjectId, ref: "Users"},
    reviewText: {type:String, required: true},
    food: {type:String, required: true},
    rating: {type:Number, required: true},
    image:[
        {type: mongoose.Types.ObjectId, ref: "Images"}
    ] 
},
{
    timestamps:  true
})


export const ReviewModel = mongoose.model("Reviews", ReviewSchema)