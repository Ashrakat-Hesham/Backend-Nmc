import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
//set directory dirname 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '../../config/.env') })
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: '',
    api_key: '',
    api_secret: '',
    secure: true,
})
console.log(cloudinary.config())
export default cloudinary;