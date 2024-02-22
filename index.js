import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import cors from 'cors';
//set directory dirname 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, './config/.env') })
import express from 'express'
import initApp from './src/index.router.js'
import morgan from 'morgan'
const app = express()
app.use(cors())
app.use(morgan('dev'))
// setup port and the baseUrl
app.get('/',(req,res,next)=>{
return res.json({message:"hello"})
})
initApp(app, express)
app.listen( process.env.PORT || 5000, () => console.log(`Example app listening on port!`))




