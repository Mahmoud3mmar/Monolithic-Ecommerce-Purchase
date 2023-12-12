import {Router } from "express"
import checkUniqueEmail from "../middlewares/auth.middleware.js"
import { SignIN, SignUp } from "../controllers/Auth.controller.js"


const router = Router()


router.use('/Signin',SignIN)
router.use('/Signup',checkUniqueEmail,SignUp)



export default router