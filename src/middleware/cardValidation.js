
const{isValidString,isValidName}=require("../validator/validator")
const {isValidObjectId}=require("mongoose");
const customerModel = require("../model/customerModel");
let c=1


exports.isValidRequests=async (req,res,next)=>{
    try{
    let data=req.body
    let request_body=Object.keys(req.body);
    if(request_body.length==0){
        return res.status(400).send({status:false,message:"request body is empty !"})
    }
   let itsMandatory=["cardType", "customerName", "vision", "customerID" ]
  
   for (let i = 0; i < itsMandatory.length; i++) {
    const element = itsMandatory[i];
    if(!request_body.includes(element)){
        return res.status(400).send({status:false,message:`${element} is required`})
    }
   }

    const { cardType, customerName,customerID } = data;

    if (!["REGULAR", "SPECIAL"].includes(cardType)){
        return res.status(400).send({ status: false, message: "cardType only can be REGULAR or SPECIAL" });
    } 
    if (!isValidString(customerName) || !isValidName(customerName) ){
        return res.status(400).send({ status: false, message: "please provide the valid customerName" });
    } 

    if(customerID){
    if (!isValidObjectId(customerID)){
         return res.status(400).send({ status: false, message: "please provide the valid customerID" });
    }
    let itsPresent=await customerModel.findById(customerID)
    if(!itsPresent) {
        return res.status(404).send({status:false,message:"customerID not found"})
    }
    }

    //auto increment customerID
let sum=["C","0","0","1"]
let d=c
c=`${c}`
if(c.length==1){
    let d=sum.length-1
    sum.splice(d,1,c)
}
if(c.length==2){
    let d=sum.length-2
    sum.splice(d,2,c)
}
if(c.length==3){
        let d=sum.length-3
        sum.splice(d,3,c)
}
data.cardNumber=sum.join("")
c=d+1
console.log(data.cardNumber)
next()
    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}