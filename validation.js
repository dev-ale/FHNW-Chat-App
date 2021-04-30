const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

// Room Validation
const roomValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        type: Joi.string().min(3).required(),
        creator: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.roomValidation = roomValidation;

