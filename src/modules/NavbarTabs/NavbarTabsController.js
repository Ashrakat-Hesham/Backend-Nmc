import NavbarTabsModel from "../../../DB/model/NavbarTabs/Navbar.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";
//                                                                  data
export const addNavberTabsPageData = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const NavbarTabsPageData = await NavbarTabsModel.create(req.body)
    return res.json({ message: 'Done', NavbarTabsPageData })
})
export const getAllData = asyncHandler(async (req, res, next) => {
    const allData = await NavbarTabsModel.find()
    return res.json({ mesage: 'Done', allData })
})
export const updateData = (asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const updatedData = await NavbarTabsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })
    return res.json({ message: 'Done', updatedData })
}))

export const deleteData = (asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const deletedData = await NavbarTabsModel.findByIdAndDelete(id)
    return res.json({ message: 'Done', deletedData })
}))
