const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')

const {getUrlPreview} = require("./url.controller");

const app = express();
const PORT = process.env.PORT || 5005;

app.use(bodyParser.json());
app.use(cors());

app.get("health", (req,res)=> {
    return res.status(200).json({status: "Server initialized and Running"})
})
app.posst("/preview", getUrlPreview);

app.listen(PORT, ()=> {
    console.log("server is running at: %s",PORT)
})