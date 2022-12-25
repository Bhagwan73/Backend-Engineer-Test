const mongoose = require("mongoose")
const ObjectId= mongoose.Schema.Types.ObjectId

const customerSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true
    },
    cardType: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true,
        unique: true
    },
    status: {
     type: String
    },
    vision: {
        type: String
       },
     customerID : {
        type:ObjectId,
         ref:"Customer",
         required:true
        }

}, { timestamps: true })

module.exports = mongoose.model("Card", customerSchema)