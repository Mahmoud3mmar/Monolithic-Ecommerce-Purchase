
import mongoose from "mongoose";



const OrderManagementSchema = new mongoose.Schema({
    customerid:{
        type:String,
        null:false
    },
    productid:{
        type:String,
        null:false
    },
    quantity:{
        type:Number,
        null:false
    },
    timestamps: true


});


const OrderManagementModel = mongoose.model('OrderManagement', OrderManagementSchema);

export default OrderManagementModel