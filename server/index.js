import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import postRoutes from './routes/post.js'
import userRoutes from './routes/user.js'
import dotenv from 'dotenv'
 
dotenv.config()

const app = express()

app.use(bodyParser.json({limit: '30mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb',extended: true}));
app.use(cors())
app.use('/posts',postRoutes)
app.use('/user',userRoutes)
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))

