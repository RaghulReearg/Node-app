const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("<h2>Node App</h2>")
})
app.listen(3000,console.log("connected"))