
import mongoose from "mongoose";



const ProductCatalogSchema = new mongoose.Schema({
    name: {
        type:String(255),
        null:false

    },
    description :text,
    price:{
        
        type:numbe,
        null:false
    }

});


const ProductCatalogModel = mongoose.model('ProuductCatalog', ProductCatalogSchema);

export default ProductCatalogModel