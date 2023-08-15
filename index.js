const express = require('express');
const app = express();
require('dotenv').config();
// require("./src/configs/db.config");

const user_route = require('./src/routes/user.route');

app.get('/', (req, res) => {
    res.send("Welcome to Astrocure App");
});

app.use("/user", user_route);

const connectDb = ()=>{
    mongoose
}

app.listen(process.env.PORT, () => {
    console.log(`Astrocure app listening on port ${process.env.PORT}`)
});
