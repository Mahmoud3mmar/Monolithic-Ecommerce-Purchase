import ShoppingCartModel from "../models/Shopping-Cart.model"







const GetAllCarts= catchError (async (req,res)=>{


    const Carts= await ShoppingCartModel().find
    res.json({Carts})     

})





const GetAllCartsByID= catchError (async (req,res)=>{


    const {Cartsid}=req.params
    const Carts= await ShoppingCartModel.findById({_id:Cartsid})


    if(!Carts) throw new AppError ('No Carts Found!!!',404)
    res.json({Carts})     

})




const AddCart= catchError (async (req,res)=>{


    const {customer_id,product_id,quantity} = req.body;


    const existingCart = await ShoppingCartModel.findOne({
        customer_id,
        product_id,
        quantity


    });

    if (existingCart) throw new AppError('Cart Already exists!!!!!',409)


    const newCart = await ShoppingCartModel.create({
        customer_id,
        product_id,
        quantity})


    res.json({newCart})


  

})





const UpdateCart= catchError(async (req, res) => {
    
    const { Cartid } = req.params;
    const {customer_id,product_id,quantity} = req.body;


    const Cart = await ShoppingCartModel.findOneAndUpdate(
        { _id: Cartid },
        { $set: {customer_id,product_id,quantity} },
        { new: true } // This option returns the modified document rather than the original
    );

    // Check if the user with the specified ID exists
    if (!Cart) throw new AppError('No Cart Found !!!',404)

    res.json({ Cart, message: 'Cart Updated.' });    
   

})


const DeleteCart= catchError(async (req, res) => {
    
    const { Cartid } = req.params;


    const Cart = await ShoppingCartModel.deleteOne(
        { _id: Cartid }
    )

    if (!Cart.deletedCount >0) throw new AppError('No Cart Found !!!',404)

    res.json({Cart,message: 'Cart deleted successfully' });
    
   

})



export  {
GetAllCarts,
GetAllCartsByID,
AddCart,
UpdateCart,
DeleteCart
}