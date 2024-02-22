import relationsModel from "../../../DB/model/relations/relations.model.js";
import cloudinary from "../../utils/cloudinary.js";
import { asyncHandler } from "../../utils/errorHandling.js";
//                                                                  data
export const addrelationsPageData = asyncHandler(async (req, res, next) => {
    if (req.file) {
        await cloudinary.uploader.upload(req.file.path, { folder: 'relations images' })
            .then((result) => {
                console.log(result, 'result');
                return req.body.image = { public_id: result.public_id, secure_url: result.secure_url }
            })
            .catch(err => console.log(err, 'err'))
        console.log(req.body);
        const realtionData = await relationsModel.insertMany(req.body)
        return res.status(201).json({ message: 'Done', realtionData })
    }
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await relationsModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateData = (asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const relationImg = await relationsModel.findById(id);
    if (req.file) {
        await cloudinary.uploader.upload(req.file.path, { folder: `relation + ${req.body.title}` })
            .then(async (result) => {
                req.body.image = { public_id: result.public_id, secure_url: result.secure_url }
                console.log('DONE');
                await cloudinary.uploader.destroy(relationImg?.image?.public_id)
            })
            .catch(err => console.log(err, 'err'))
    }
    console.log(req.body);
    const updatedImg = await relationsModel.findByIdAndUpdate(id, req.body, { new: true })
    return res.json({ mesage: "Done", updatedImg })
}))

