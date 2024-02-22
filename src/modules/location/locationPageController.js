import locationDataModel from "../../../DB/model/location/location.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";
//                                                                  data
export const addlocationPageData = asyncHandler(async (req, res, next) => {
    const locationPageData = await locationDataModel.create(req.body)//change statically from mongoatlas
    return res.json({ message: 'Done', locationPageData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await locationDataModel.find()
    return res.json({ mesage: 'Done', allData })
})
