import mongoose from "mongoose";

const MenusSchema = new mongoose.Schema ({


    menus: [
        {

            name: {type:String, rewuired:true},
            items:[
                {
                    type: mongoose.Types.ObjectId,
                    ref: "Foods"
                }
            ]
        }
    ],
    recommended: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Foods",
            unique: true   
        }
    ]

},
{
    timestamps:  true
})

export const MenuModel = mongoose.model('Menus', MenusSchema)