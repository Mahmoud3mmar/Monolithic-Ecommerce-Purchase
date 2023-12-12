import { AppError, catchError } from "../../../ultis/error.handler.js"
import ProductCatalogModel from "../models/Prouduct-Catalog.model.js"




const GetAllProducts= catchError (async (req,res)=>{


    const products= await ProductCatalogModel().find
    res.json({products})     

})





const GetAllProductByID= catchError (async (req,res)=>{


    const {productid}=req.params
    const product= await ProductCatalogModel.findById({_id:productid})


    if(!product) throw new error ('No Product Found!!!',404)
    res.json({product})     

})




const AddProduct= catchError (async (req,res)=>{


    const { name, description, price} = req.body;


    const existingProduct = await ProductCatalogModel.findOne({
        name,
        description,
        price
    });

    if (existingProduct) throw new AppError('Productalready exists!!!!!',409)


    const newproduct = await ProductCatalogModel.create({
    name,
    description,
    price})


    res.json({newproduct})


  

});





const UpdateProduct = catchError(async (req, res) => {
    
    const { productid } = req.params;
    const { name, description, price} = req.body;


    const product = await ProductCatalogModel.findOneAndUpdate(
        { _id: productid },
        { $set: { name, description, price} },
        { new: true } // This option returns the modified document rather than the original
    );

    // Check if the user with the specified ID exists
    if (!product) throw new AppError('No Product Found !!!',404)

    res.json({ product, message: 'Product Updated.' });    
   

})


const DeleteProduct = catchError(async (req, res) => {
    
    const { productid } = req.params;


    const product = await ProductCatalogModel.deleteOne(
        { _id: productid }
    )

    if (!product.deletedCount >0) throw new AppError('No Product Found !!!',404)

    res.json({product,message: 'Product deleted successfully' });
    
   

})



export  {
GetAllProducts,
GetAllProductByID,
AddProduct,
UpdateProduct,
DeleteProduct
}