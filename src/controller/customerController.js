const customerModel = require("../model/customerModel")


//                           >>>-->|CREATE_CUSTOMER|<--<<<
exports.createCostomer=async (req,res)=>{
    try{
    let data=req.body
    let createCostomer=await customerModel.create(data)
    return res.status(201).send({status:true,message:"customer created successfully",data:createCostomer})
    }catch(err){
        return res.status(500).send({sattus:false,message:err.message})
    }
}

//                           >>>-->|GET_CUSTOMERS|<--<<<
exports.getAllcustomers=async (req,res)=>{
    try{
    let getAllcustomers=await customerModel.find({status:"ACTIVE"})
    return res.sattus(200).send({status:true,message:"list of all active customers",data:getAllcustomers})
    }catch(err){
        return res.status(500).send({sattus:false,message:err.message})
    }
}

//                           >>>-->|DELETE_CUSTOMER|<--<<<
exports.deleteCustomers=async (req,res)=>{
    try{
        if(Object.keys(req.body).length==0){
    return res.status(400).send({sattus:false,message:"please provide request data for delete customers"})
        }
   let deleteCustomers=await customerModel.deleteOne(req.body)
   if(deleteCustomers.deletedCount!=1) {
   return res.status(400).send({status:true,message:"no match reqeust for delete customer"})
   } 
   return res.status(200).send({status:true,message:"customer deleted succssefully"})
}catch(err){
    return res.status(500).send({sattus:false,message:err.message})
}
}

