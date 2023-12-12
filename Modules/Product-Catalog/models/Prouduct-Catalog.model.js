
import mongoose from "mongoose";



const ProductCatalogSchema = new mongoose.Schema({
    name: {
        type:String,
        null:false

    },
    description :String,
    price:{
        
        type:Number,
        null:false
    }

});


const ProductCatalogModel = mongoose.model('ProuductCatalog', ProductCatalogSchema);

export default ProductCatalogModel