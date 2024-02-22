import goldpriceDataModel from "../../../DB/model/gold price/goldPrice.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";

//                                                                  data
export const addgoldPricePageData = asyncHandler(async (req, res, next) => {
    const goldpricePageData = await goldpriceDataModel.create(req.body)//change statically from mongoatlas
    return res.json({ message: 'Done', goldpricePageData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await goldpriceDataModel.find()
    return res.json({ mesage: 'Done', allData })
})
