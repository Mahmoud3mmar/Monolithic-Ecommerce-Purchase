import { catchError } from "../../../ultis/error.handler"
import ProductCatalogModel from "../models/Prouduct-Catalog.model"




const GetAllProducts= catchError (async (req,res)=>{


    const products= await ProductCatalogModel().find()
    res.json({products})     

})





const GetAllProductByID= catchError (async (req,res)=>{


    const {productid}=req.params
    const product= await ProductCatalogModel().findById(productid)


    if(!product) throw new error ('No Product Found!!!',404)
    res.json({product})     

})




const CreateProduct= catchError (async (req,res)=>{


    const {productid}=req.params
    const { name, description, price} = req.body;


    const existingproduct = await UserModel.findById(productid);

    if (!existingproduct) {
        throw new AppError('product not found',404)
   }


   const newproduct = await PostModel.create({
    name,
    description,
    price})


    res.json({newproduct})


  

});





const UpdateProduct = catchError(async (req, res) => {
    
    const { productid } = req.params;
    const { name, description, price} = req.body;


    const product = await UserModel.findOneAndUpdate(
        { _id: productid },
        { $set: { name, description, price} },
        { new: true } // This option returns the modified document rather than the original
    );

    // Check if the user with the specified ID exists
    if (!product) throw new AppError('No Product Found !!!',404)

    res.json({product});
    
   

})


const DeleteProduct = catchError(async (req, res) => {
    
    const { productid } = req.params;


    const product = await UserModel.deleteOne(
        { _id: productid }
    )

    if (!product.deletedCount >0) throw new AppError('No Product Found !!!',404)

    res.json({product},{ message: 'User deleted successfully' });
    
   

})



