

import mongoose from "mongoose";



const CustomerSchema = new mongoose.Schema({

    name:{
        type:String,
        null:false,
    },
    email:{
        type:String,
        null:false
    },
    password:{
        type:String,
        null:false
    },
    phone:{
        type:Number,
        null:false
    },
    
    
    timestamps: true

    





});


const CustomerModel = mongoose.model('Customer', CustomerSchema);

export default CustomerModel