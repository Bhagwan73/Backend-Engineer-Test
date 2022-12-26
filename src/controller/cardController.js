const cardModel = require("../model/cardModel")



//                           >>>-->|CREATE_CARD|<--<<<

exports.createCard=async (req,res)=>{
    try{
    let createCard=await cardModel.create(req.body)
    return res.status(201).send({status:true,message:"card created successfully",data:createCard})
    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

//                           >>>-->|GET_ALL_CARDS|<--<<<


exports.getCards=async (req,res)=>{
    try{
    let getAllCards=await cardModel.find()
    if(getAllCards.length==0){
        return res.status(404).send({status:false,message:"no any cards found"})
    }
    return res.status(200).send({status:true,message:"list of all cards",data:getAllCards})
}catch(err){
    return res.status(500).send({status:false,message:err.message})

}
}