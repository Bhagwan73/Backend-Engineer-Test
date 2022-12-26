const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
const route=require("./route/route")
const mongoDB="mongodb+srv://BhagwanNavthar:sOqsn7dh8KuLiKHp@cluster0.j8ysgx2.mongodb.net/Bhagwan73-DB?retryWrites=true&w=majority"

app.use("/",route)
mongoose.set('strictQuery', false)
mongoose.connect(mongoDB,{useNewUrlParser:true})
.then(()=>console.log("MONGODB IS CONNECTED"))
.catch((err)=>console.log(err))

let PORT=process.env.PORT || 3000
app.listen(PORT , ()=>{
    console.log("express running on port 3000")
})