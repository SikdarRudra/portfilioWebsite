import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/DB.js'
import { adminRoutes } from './routes/admin.route.js'
import websiteRoute from './routes/website.route.js'

const app = express()
app.use(express.json())
// app.use('/',(req,res)=>{
//     res.send("testing server...")
// })

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",")
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true)

      if (allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
  })
)

app.use('/api/admin',adminRoutes)
app.use('/api/website',websiteRoute)


const port = process.env.PORT || 5000

app.listen(port , ()=>{
    console.log(`server started at http://localhost:${port}`)
    connectDB()
})