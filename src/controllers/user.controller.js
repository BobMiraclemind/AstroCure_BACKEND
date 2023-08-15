const userModel = require("../models/user.model");

const signup = (req,res)=>{
    //Existing user check
    //hashed Password
    //User Creation
    //Token Generation
    const {name,email,password} = req.body;
    try {
        const existingUser = await userModel.findOne({email:email});
        
    }catch (error){
    
    }
};

const signin = (req,res)=>{

};

module.exports = {
    signup,
    signin
}