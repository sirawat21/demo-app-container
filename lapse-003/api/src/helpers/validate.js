import Joi from "joi"

const schema = {
    name: Joi.string().min(3).required()
}

const validate = (input)  => {
    return Joi.validate(input, schema)
}


