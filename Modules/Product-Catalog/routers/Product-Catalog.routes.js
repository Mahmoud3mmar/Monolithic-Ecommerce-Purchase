import { Router } from "express";
import { AddProduct, DeleteProduct, GetAllProductByID, GetAllProducts, UpdateProduct } from "../controllers/Prouduct-Catalog.controller.js";

const router = Router()




router.route('/').get(GetAllProducts).post(AddProduct)



router.route('/:productid').get(GetAllProductByID).put(UpdateProduct).delete(DeleteProduct)




export default router