import joi from 'joi'

export const ValidateSignup = (userData)=>{
    const Schema = joi.object({
        fullname: joi.string().required().min(4),
        email: joi.string().email(),
        address: joi.array().items(joi.object({details: joi.string(), for: joi.string()})),
        phonenumber: joi.number() 
    })

    return Schema.validateAsync(userData)
}


export const ValidateSignin = (userData)=>{
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })

    return Schema.validateAsync(userData)
}