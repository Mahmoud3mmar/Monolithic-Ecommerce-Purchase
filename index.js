import express from 'express'
import Productrouter from './Modules/Product-Catalog/routers/Product-Catalog.routes.js'
import ConnectToDB from './DataBase/db.js'
const app = express()
const port = 3000

app.use(express.json())


app.use('/products',Productrouter)



app.use((error,req,res,next)=>{
    const {message,status}=error
    res.status(status ||500).json({message})
})




ConnectToDB()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))