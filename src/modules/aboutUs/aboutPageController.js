import aboutUsDataModel from "../../../DB/model/about us/aboutUsPageData.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";
//                                                              data
export const addAboutUsPagedata = asyncHandler(async (req, res, next) => {
    const homePageData = await aboutUsDataModel.create(req.body)
    return res.json({ message: 'Done', homePageData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await aboutUsDataModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateData = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const getData = await aboutUsDataModel.findById(id)
    if (!getData) { return res.json({ mesage: "not found" })}
    const updateData = await aboutUsDataModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    return res.json({ mesage: 'Done', updateData })
})

