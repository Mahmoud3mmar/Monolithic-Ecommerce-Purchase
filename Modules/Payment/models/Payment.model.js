
import mongoose from "mongoose";



const PaymentSchema = new mongoose.Schema({
    // userName: String, // String is shorthand for {type: String}
    // email: {
    //     type:String,
    //     unique:true,
    // },
    // Q: String,
    // age:Number,
    // gender:String,
    // phone:Number,
    // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] // Reference to Post model

});


const PaymentModel = mongoose.model('Payment', PaymentSchema);

export default PaymentModel