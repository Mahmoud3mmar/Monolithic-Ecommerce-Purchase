import { AppError, catchError } from "../../../ultis/error.handler.js"
import CustomerModel from "../models/Customer.model.js"





const GetAllCustomers= catchError (async (req,res)=>{


    const Customer= await CustomerModel.find()
    res.json({Customer})     

})





const GetAllCustomerByID= catchError (async (req,res)=>{


    const {Customersid}=req.params
    const Customers= await CustomerModel.findById({_id:Customersid})


    if(!Customers) throw new AppError ('No Product Found!!!',404)
    res.json({product})     

})




const AddCustomer= catchError (async (req,res)=>{


    const { name,email,password,phone} = req.body;


    const existinCustomer = await CustomerModel.findOne({
        name,
        email,
        password,
        phone


    });

    if (existinCustomer) throw new AppError('Customer Already exists!!!!!',409)


    const newCustomer = await CustomerModel.create({
        name,
        email,
        password,
        phone})


    res.json({newCustomer})


  

})





const UpdateCustomer= catchError(async (req, res) => {
    
    const { Customerid } = req.params;
    const {name,email,password,phone} = req.body;


    const Customer = await CustomerModel.findOneAndUpdate(
        { _id: Customerid },
        { $set: {name,email,password,phone} },
        { new: true } // This option returns the modified document rather than the original
    );


    if (!Customer) throw new AppError('No Customer Found !!!',404)

    res.json({ Customer, message: 'Customer Updated.' });    
   

})


const DeleteCustomer= catchError(async (req, res) => {
    
    const { Customerid } = req.params;


    const Customer = await CustomerModel.deleteOne(
        { _id: Customerid }
    )

    if (!Customer.deletedCount >0) throw new AppError('No Customer Found !!!',404)

    res.json({Customer,message: 'Customer deleted successfully' });
    
   

})



export  {
GetAllCustomers,
GetAllCustomerByID,
AddCustomer,
UpdateCustomer,
DeleteCustomer
}