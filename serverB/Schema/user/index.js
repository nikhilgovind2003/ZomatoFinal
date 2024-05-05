import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const UserSchema = mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    address: [{
        details: {type: String},
        for: {type: String}        
    }],
    phonenumber: {type:Number}
},
{
    timestamps:  true
})








UserSchema.methods.generateJwtToken = function() {
    return jwt.sign({user: this._id.toString()}, "ZomatoApp")
}


UserSchema.static.findEmailAndPhone = async ({email, phoneNumber})=>{
    
    // check whether email or phoneNumber exist
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhoneNumber = await UserModel.findOne({ phoneNumber });

    if(checkUserByEmail || checkUserByPhoneNumber){
        throw new Error("User already exist");
    }
    return false;
};



UserSchema.static.findByEmailAndPasword = async ({email, password})=>{
    
    // check whether email or phoneNumber exist
    const user = await UserModel.findOne({ email });

    if(!user) res.json()

    const doesPasswordMatch = await bcrypt.compare(password, user.password)

    if(!doesPasswordMatch){
        throw new Error("Invalid password");
    }
    return user;
};

UserSchema.pre("save", function(next){
    const user = this;

    // pasword isnt modified
    if(!user.isModified("password")) return next();

    //  generating bbcrypt salt
    bcrypt.genSalt(8, (error, next)=>{
        if(error) return next(error)

        //  hashing the password
        bcrypt.hash(user.password, salt, (err, hash)=>{
            if(error) return next(error)

            //Assigning hashed password
            user.password = hash
            return next();

        })
    })
    
})



export const UserModel = mongoose.model('Users', UserSchema)