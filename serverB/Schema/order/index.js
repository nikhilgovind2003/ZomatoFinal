import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user:{type: mongoose.Types.ObjectId, ref: "users"},
    orderDetails: [
        {
            food: {type:mongoose.Types.ObjectId  , ref: "Foods"},
            quantity: {type: Number, required: true},
            payment: {type: String, required: true},
            quantity: {type: String, default: "placed"},
            paymentDetails:{
                itemsTotal: {type: String, required: true},
                promo: {type: String, required: true},
                tax: {type: Number, required: true},
            }
        }
    ],
    orderRatings: {type: String, required: true}
    
},
{
    timestamps:  true
})

export const orderModel = mongoose.model("Orders", OrderSchema)
