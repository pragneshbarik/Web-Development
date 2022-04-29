const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    console.log(req);
    res.send("<h1>Hello</h1>");
})

app.get("/contact", (req, res) => {
    res.send("please do not contact me");
})


app.listen(3000, () => {
    console.log("server started at port 3000");
} )