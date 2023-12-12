

import bcrypt from 'bcrypt'
import CustomerModel from "../../Customer/models/Customer.model.js"
import { AppError, catchError } from '../../../ultis/error.handler.js'



const SignIN = catchError( async (req,res)=>{


 const {email,password}=req.body
 const user = await CustomerModel.findOne({email})


 if(user && bcrypt.compareSync(password,user.password)){

    res.json({message:'signed in sucessfully'})
 }

throw new AppError('invalid credentials!!!',400)
})

const SignUp =catchError(async (req,res)=>{

    const {name,email,password,phone,age}=req.body
    const hashedpassword=bcrypt.hashSync(password,5)
    await CustomerModel.create({name,email,password:hashedpassword,phone,age})

    res.status(201).json({message:'signed up Sucessfully'})
})
export{

    SignIN,
    SignUp
}