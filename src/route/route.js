const express=require("express")
const router=express.Router()
const {createCostomer,getAllcustomers,deleteCustomers}=require("../controller/customerController")
const {isValidRequest}=require("../middleware/costomerValidation")
const {createCard,getCards}=require("../controller/cardController")
const {isValidRequests}=require("../middleware/cardValidation")

//                           >>>-->|_CUSTOMER_APIS|<--<<<
router.post("/cerateCustomer",isValidRequest,createCostomer)
router.get("/getAllcustomers",getAllcustomers)
router.delete("/deleteCustomers",deleteCustomers)

//                           >>>-->|_CARD_APIS|<--<<<
router.post("/createCard",isValidRequests,createCard)
router.get("/getAllCards",getCards)

//                           >>>-->|_ERROR_HANDLING_API|<--<<<
router.all("/*",(req,res)=>{
    return res.status(404).send({status:false,message:"path not found"})
})


module.exports=router