const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "ASTROCURE_APP_KEY";

const signup = (req, res) => {
    //Existing user check
    //hashed Password
    //User Creation
    //Token Generation
    const {name, email, password} = req.body;
    try {
        const existingUser = await
        userModel.findOne({email:email});
        if (existingUser) {
            return res.status(400).json({message:"User Already Exists"});
        }
        
        const hashedPassword = await
        bcrypt.hash(password, 10);
        const result = await
        userModel.create({
            email:email,
            password:hashedPassword,
            name:name
        });
        
        const token = jwt.sign({
            email:result.email,
            id:result._id
        }, SECRET_KEY);
        res.status(201).json({user:result, token:token});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"});
    }
    ;
};

const signin = (req, res) => {

};

module.exports = {
    signup,
    signin
}