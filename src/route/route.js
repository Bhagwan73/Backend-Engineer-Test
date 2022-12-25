
const express=require("express")
const router=express.Router()
const {createCostomer,getAllcustomers}=require("../controller/customerController")
const {isValidRequest}=require("../middleware/costomerValidation")
router.get("/test-me",(req,res)=>{
    return res.status(200).send({status:true,msg:"all is well !!"})
})

router.post("/cerateCustomer",isValidRequest,createCostomer)
router.get("/getAllcustomers",getAllcustomers)

module.exports=router