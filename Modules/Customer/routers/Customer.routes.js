import { Router } from "express";
import { AddCustomer, DeleteCustomer, GetAllCustomerByID, GetAllCustomers, UpdateCustomer } from "../controllers/Customer.controller.js";

const router = Router()






router.route('/').get(GetAllCustomers).post(AddCustomer)


router.route('/:customerid').get(GetAllCustomerByID).put(UpdateCustomer).delete(DeleteCustomer)





export default router