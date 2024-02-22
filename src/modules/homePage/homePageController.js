import homePageDataModel from "../../../DB/model/home/HomePageData.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";

export const addHomePagedata = asyncHandler(async (req, res, next) => {
    const homePageData = await homePageDataModel.create(req.body)
    return res.json({ message: 'Done', homePageData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await homePageDataModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateData = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const allData = await homePageDataModel.findByIdAndUpdate(id, req.body, { new: true })
    return res.json({ mesage: 'Done', allData })
})
export const deleteData = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const allData = await homePageDataModel.findByIdAndDelete(id)
    return res.json({ mesage: 'Done', deletedData:allData })
})


