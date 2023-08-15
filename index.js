const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
// require("./src/configs/db.config");

const user_route = require('./src/routes/user.route');

app.use(express.json);

app.get('/', (req, res) => {
    res.send("Welcome to Astrocure App");
});

app.use("/user", user_route);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to Database");
        
    })
    // .catch((error) => {
    //     console.log(error);
    // });

// const connectDb = ()=>{
//     mongoose
// }
app.listen(process.env.PORT, () => {
    console.log(`Astrocure app listening on port ${process.env.PORT}`);
});


