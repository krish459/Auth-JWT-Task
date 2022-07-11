const router = require("express").Router();
const {userModel , validate} = require('../models/userModel')
const bcrypt = require("bcrypt");
// const User = require('../models/userModel')


router.post("/",async(req,res)=>{
    try{
        const {error} =validate(req.body)
        if(error){
            return res.status(400).send({message: error.details[0].message});
}
        const user = await userModel.findOne({email: req.body.email});
        if (user) {
            return res.status(409).send({message: "User with given email already exists"});

        }   
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new userModel({...req.body, password: hashPassword}).save();
        res.status(201).send({message: "User created successfully"})

    }catch (error){
        res.status(500).send({message: "Internal Server Error"});
        console.log(error);
    }
})

module.exports = router;