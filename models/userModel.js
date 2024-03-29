const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity");

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        require
    },
    lastName:{
        type: String,
        require
    },
    email:{
        type: String,
        require
    },
    password:{
        type: String,
        require
    }
   
},{
    timestamps: true,
})


userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY, { expiresIn:"7d"})
    return token
}

const userModel = mongoose.model('user', userSchema)

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data)
}

module.exports ={ userModel, validate}