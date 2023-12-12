import { Router } from "express";
import { AddOrder, DeleteOrder, GetAllOrderByID, GetAllOrders, UpdateOrder } from "../controllers/Order-Management.controller.js";

const router = Router()






router.route('/').get(GetAllOrders).post(AddOrder)

router.route('/:productid').get(GetAllOrderByID).put(UpdateOrder).delete(DeleteOrder)
