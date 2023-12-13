

import mongoose from "mongoose";



const ShoppingCartSchema = new mongoose.Schema({

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

const ShoppingCartModel = mongoose.model('ShoppingCart', ShoppingCartSchema);

export default ShoppingCartModel