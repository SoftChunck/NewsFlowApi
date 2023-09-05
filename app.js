require('dotenv').config()
const express = require("express");
const cors = require("cors");
// import db connection
const dbConnection = require("./connection/db")
// import router
const router = require("./router/router");
const bodyParser = require('body-parser');
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        res.status(200).send("user is herer 👥")

    } catch (error) {
        console.error("error while get user", error);
    }   
})  
let PATH = process.env.PORT || 3344;
app.use("/api/v1", router)

let server = app.listen(PATH, () => {
    dbConnection();
    console.log(`flashfigma server listening at http://localhost:${PATH}`);
})
process.on('unhandledRejection', error => {
    console.log(error.message);
    server.close(() => process.exit(1));
});