import { AppError, catchError } from "../../../utils/erroer.handler.js";
import CustomerModel from "../../Customer/models/Customer.model.js";


const checkUniqueEmail = catchError(async(req,res,next)=>{


    const {email}=req.body
    const Customer = await CustomerModel.findOne({email})

    if(Customer) throw new AppError ("Email already exists!!",400)
    next()
})



export default checkUniqueEmail