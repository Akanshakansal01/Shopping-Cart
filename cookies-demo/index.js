const express = require("express");
const path = require("path")
// const engine = require("ejs-mate")
const app = express();
const cookieParser=require("cookie-parser");

app.set("view",path.join(__dirname,"views"));
app.use(cookieParser("thisIsSecretSession"));

app.get("/setcookies",(req,res)=>{
    res.cookie("name","akansha")
    .cookie("location","M.nagar",{httpOnly:true})
    .cookie("age",20)
    .cookie("login","true")
    .send("cookie created successfully");
})

app.get("/login",(req,res)=>{
    const {login}= req.cookies;
    if(login=="true")
    {
        return res.send("User is logged in");
    }
    return res.redirect("/setcookies");
})


app.get("/seecookies",(req,res)=>{
    res.send(req.cookies);
})

app.listen(3000,(req,res)=>{
    console.log("server running at 3000 port.")
})