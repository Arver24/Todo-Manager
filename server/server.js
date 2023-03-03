const express=require('express')
const app=express()
const PORT=6900
app.get('/',(req,res)=>{
    res.send("Server is working now. Perfect")
})
app.listen(PORT,()=>{
    console.log("Server is running on port : ",PORT)
})