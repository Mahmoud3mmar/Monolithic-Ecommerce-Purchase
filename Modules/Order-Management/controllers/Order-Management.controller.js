import { AppError, catchError } from "../../../ultis/error.handler.js"
import OrderManagementModel from "../models/Order-Management.model.js"







const GetAllOrders= catchError (async (req,res)=>{


    const Orders= await OrderManagementModel().find
    res.json({Orders})     

})





const GetAllOrderByID= catchError (async (req,res)=>{


    const {Ordersid}=req.params
    const Orders= await OrderManagementModel.findById({_id:Ordersid})


    if(!Orders) throw new AppError ('No Product Found!!!',404)
    res.json({product})     

})




const AddOrder= catchError (async (req,res)=>{


    const {customerid,productid,quantity} = req.body;


    const existingOrder = await OrderManagementModel.findOne({
        customerid,
        productid,
        quantity


    });

    if (existingOrder) throw new AppError('Order Already exists!!!!!',409)


    const newOrder = await OrderManagementModel.create({
        customerid,
        productid,
        quantity})


    res.json({newOrder})


  

})





const UpdateOrder= catchError(async (req, res) => {
    
    const { Orderid } = req.params;
    const {customerid,productid,quantity} = req.body;


    const Order = await OrderManagementModel.findOneAndUpdate(
        { _id: Orderid },
        { $set: {customerid,productid,quantity} },
        { new: true } // This option returns the modified document rather than the original
    );

    // Check if the user with the specified ID exists
    if (!Order) throw new AppError('No Order Found !!!',404)

    res.json({ Order, message: 'Order Updated.' });    
   

})


const DeleteOrder= catchError(async (req, res) => {
    
    const { Orderid } = req.params;


    const Order = await ProductCatalogModel.deleteOne(
        { _id: Orderid }
    )

    if (!Order.deletedCount >0) throw new AppError('No Order Found !!!',404)

    res.json({Order,message: 'Order deleted successfully' });
    
   

})



export  {
GetAllOrders,
GetAllOrderByID,
AddOrder,
UpdateOrder,
DeleteOrder
}