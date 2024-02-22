import sustainabilityDataModel from "../../../DB/model/sustainability/sustainabilityPageData.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";

//                                                                  data
export const addsustainabilityPagedata = asyncHandler(async (req, res, next) => {
    const sustainabilityPageData = await sustainabilityDataModel.create(req.body)
    return res.json({ message: 'Done', sustainabilityPageData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await sustainabilityDataModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateData = (asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const updatedData = await projectsDataModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
    return res.json({ message: 'Done', updatedData })
}))
