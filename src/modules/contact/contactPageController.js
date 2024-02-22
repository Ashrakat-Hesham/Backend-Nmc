import contactDataModel from "../../../DB/model/contact/contactPageData.model.js";
import cloudinary from "../../utils/cloudinary.js";
import { asyncHandler } from "../../utils/errorHandling.js";
//                                                                  data
export const addcontactPagedata = asyncHandler(async (req, res, next) => {
    const contactPageData = await contactDataModel.create(req.body)
    return res.json({ message: 'Done', contactPageData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await contactDataModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateData = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const getData = await contactDataModel.findById(id)
    if (!getData) { return res.json({ mesage: "not found" })}
    const updateData = await contactDataModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    return res.json({ mesage: 'Done', updateData })
})