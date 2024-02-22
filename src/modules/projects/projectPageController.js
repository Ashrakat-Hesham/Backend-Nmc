import projectsDataModel from "../../../DB/model/projects/projectsPageData.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";
//                                                                  data
export const addprojectPagedata = asyncHandler(async (req, res, next) => {
    const homePageData = await projectsDataModel.create(req.body)
    return res.json({ message: 'Done', homePageData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await projectsDataModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateData = (asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const updatedData = await projectsDataModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
    return res.json({ message: 'Done', updatedData })
}))
