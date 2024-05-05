import AWS from '@aws-sdk/client-s3'

// AWS s3 bucket config
const s3bucket = AWS.S3({
    accessKeyId: process.env.AWS_s3_ACCESS_KEY ,
    SecretAccessKey: process.env.AWS_s3_SECRET_KEY ,
    region : "ap-south-1"
})

export const s3Upload = (options)=>{
    return new Promise((resolve, reject)=>
    s3bucket.upload(options, (error,data)=>{
        if(error) return reject(error);
        return resolve(data);
    })
)
}
