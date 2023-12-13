
import mongoose from "mongoose";



const OrderManagementSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
      },
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    },
    {
      timestamps: true
    }
);


const OrderManagementModel = mongoose.model('OrderManagement', OrderManagementSchema);

export default OrderManagementModel