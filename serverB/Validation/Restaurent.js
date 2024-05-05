import joi from 'joi'

export const ValidateResaurentCity = (resObject)=>{
    const Schema = joi.object({
        city: joi.string().required()
    })

    return Schema.validateAsync(resObject)
}

export const ValidateResSearchString = (string)=>{
    const Schema = joi.object({
        SearchString: joi.string().required()
    })

    return Schema.validateAsync(string)
}