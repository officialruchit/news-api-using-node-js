const express = require("express")
const app=express()
const bodyparser=require("body-parser")

app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("done")
})

const newRoute=require('./src/routes/news')


app.use("/news",newRoute
)
app.use("/article",newRoute
)

app.listen(4444,()=>{
    console.log("done")
})