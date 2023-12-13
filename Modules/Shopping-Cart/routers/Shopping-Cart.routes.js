import { Router } from "express";
import { AddCart, DeleteCart, GetAllCarts, GetAllCartsByID, UpdateCart } from "../controllers/Shopping-Cart.controller";



const router=Router()


router.route('/').get(GetAllCarts).post(AddCart)


router.route('/:cartid').get(GetAllCartsByID).put(UpdateCart).delete(DeleteCart)



export default router