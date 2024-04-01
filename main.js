const express = require("express")

const app  = express()
app.get('/' , (req,res)=>{
    res.send("welcome to my store")
})

app.get('/products' , (req,res)=>{
    const products = [
        {
            name : "iphone",
            price : 28,
            description : "good product"
        },
        {
            name : "android",
            price : 23,
            description : "nice product"
        },
        {
            name : "windows",
            price : 25,
            description : "performent product"
        },
    ]

    res.send(products)

})

app.listen(3030, ()=>{
    console.log("server started at 3030")
})