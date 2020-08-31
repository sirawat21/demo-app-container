import Joi from "joi"

const schema = {
    text: Joi.string().min(3).required()
}

const validate = (input)  => {
    return Joi.validate(input, schema)
}

export { validate }
