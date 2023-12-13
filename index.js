import express from 'express'
import productRouter from './Modules/Product-Catalog/routers/Product-Catalog.routes.js'
import orderRouter from './Modules/Order-Management/routers/Order-Management.routes.js'
import customerRouter from './Modules/Customer/routers/Customer.routes.js'
import cartRouter from './Modules/Shopping-Cart/routers/Shopping-Cart.routes.js'
import authRouter from './Modules/Auth/routers/Auth.routes.js'

import ConnectToDB from './DataBase/db.js'
const app = express()
const port = 3000

app.use(express.json())


app.use('/products',productRouter)
app.use('/customer',customerRouter)
app.use('/order',orderRouter)
app.use('/cart',cartRouter)

app.use('/auth',authRouter)


app.use((error,req,res,next)=>{
    const {message,status}=error
    res.status(status ||500).json({message})
})




ConnectToDB()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))