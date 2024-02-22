import cloudinary from "./cloudinary.js"
import { asyncHandler } from "./errorHandling.js"

export const uploadPhoto = (model) => {
    return asyncHandler(async (req, res, next) => {
        const { public_id, secure_url } = await cloudinary.uploader.upload(req.file.path, { folder: 'home background' })
        req.body.image = { public_id, secure_url }
        let x = await model.create(req.body)
        return res.status(201).json({ message: 'Done', x })
    })
}