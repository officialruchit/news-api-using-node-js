const express= require("express")
const route=express.Router()
const axios=require("axios")


route.get('/',async(req,res)=>{


try{
const api=await axios.get("https://raddy.dev/wp-json/wp/v2/posts/")
console.log(api)
res.render("index",{art:api.data})
}catch(e){
    if(err.response) {
        res.render('news', { articles : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    } else if(err.requiest) {
        res.render('news', { articles : null })
        console.log(err.requiest)
    } else {
        res.render('news', { articles : null })
        console.error('Error', err.message)
    }
}

})





route.get('/:id',async(req,res)=>{
let artid=req.params.id
console.log(artid)

    try{
    const api=await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${artid}`)
    console.log(api)
    res.render("single",{art:api.data})
    }catch(e){
        if(err.response) {
            res.render('single', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('single', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('single', { articles : null })
            console.error('Error', err.message)
        }
    }
    
    })

module.exports=route; 