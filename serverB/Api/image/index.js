import express from "express";
const Router = express.Router()
import {ImageModel} from "../../Schema/allModels.js"
import AWS from "aws-sdk"
import multer from "multer"

// Multer config
const storage = multer.memoryStorage();
const upload = multer({storage})


/*
Route          /
Des            Uploading given image to s3 bucket, and then saving the file to mongoDB
Params         NONE
Access         Public
Method         POST
*/
Router.post("/",upload.single("file"), async (req,res)=>{
    try {
        const file = req.file;
        // s3 bucket option
        const bucketOption = {
            Bucket:  "Nikhilgovind",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.minetype,
            ACL: "public-read"
        }

        const s3Upload = (options)=>{
            return new Promise((resolve, reject)=>
            s3bucket.upload(options, (error,data)=>{
                if(error) return reject(error);
                return resolve(data);
            })
        )}
        
        const uploadImage = await s3Upload(bucketOption);
    } 
    
    catch (error) {
        return res.status(500).json({error: error.message})   
    }
})

export default Router
