const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
const route=require("./route/route")
const mongoDB="mongodb+srv://sarwjeet424:96568437528p@cluster0.8tsocgw.mongodb.net/group31Database"

app.use("/",route)
mongoose.set('strictQuery', false)
mongoose.connect(mongoDB,{useNewUrlParser:true})
.then(()=>console.log("MONGODB IS CONNECTED"))
.catch((err)=>console.log(err))

app.listen(3000 , ()=>{
    console.log("express running on port 3000")
})