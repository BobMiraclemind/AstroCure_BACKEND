const express = require("express");
const userRouter = express.Router();


userRouter.get("/all", (req, resp, next) => {
    resp.send("Get Method working inside router");
});

userRouter.post("/sign_up",(req,res)=>{
res.send("SignUp");
});

userRouter.post("/sign_in",(req,res)=>{
    res.send("SignIn");
});

module.exports = userRouter;