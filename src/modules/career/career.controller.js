import careerModel from "../../../DB/model/career/careerData.model .js";
import MainDataModel from "../../../DB/model/career/mainData.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";
//                                                                  data
export const addCareerdata = asyncHandler(async (req, res, next) => {
    const careerData = await careerModel.insertMany(req.body)
    return res.json({ message: 'Done', careerData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await careerModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateData = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const getData = await careerModel.findById(id)
    if (!getData) { return res.json({ mesage: "not found" }) }
    const updateData = await careerModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    return res.json({ mesage: 'Done', updateData })
})
//main Data
export const addMAinData = asyncHandler(async (req, res, next) => {
    const careerData = await MainDataModel.insertMany(req.body)
    return res.json({ message: 'Done', careerData })
})
export const getMainData = asyncHandler(async (req, res, next) => {
    const allData = await MainDataModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateMainData = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const getData = await MainDataModel.findById(id)
    if (!getData) { return res.json({ mesage: "not found" }) }
    const updateData = await MainDataModel.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    return res.json({ mesage: 'Done', updateData })
})

