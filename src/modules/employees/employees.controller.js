import employeesModel from "../../../DB/model/employees/employees.model.js";
import cloudinary from "../../utils/cloudinary.js";
import { asyncHandler } from "../../utils/errorHandling.js";
export const addEmployees = asyncHandler(async (req, res, next) => {
    let x;
    if (req.file) {
        await cloudinary.uploader.upload(req.file.path, { folder: `employee + ${req.body.name}` })
            .then((result) => {
                x = { public_id: result.public_id, secure_url: result.secure_url }
            })
            .catch(err => console.log(err, 'err'))
        req.body.image = x;
    }
    if (req?.body?.image !== undefined && req?.body?.image !== null) {
        const emplyee = await employeesModel.create(req.body)
        return res.status(201).json({ message: 'Done', emplyee })
    }
})
export const getSpecificUser = asyncHandler(async (req, res, next) => {
    const employee = await employeesModel.findById(req.params.id)
    return res.json({ message: 'Done', employee })
})
export const updateEmployeeImg = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const employeeImg = await employeesModel.findById(id);
    if (!employeeImg) {
        return res.json({ mesage: 'not found' })
    }
    if (req.file) {
        let x;
        await cloudinary.uploader.upload(req.file.path, { folder: `employee+${req.body.name}` })
            .then(async (result) => {
                console.log(result, 'result');
                x = { public_id: result.public_id, secure_url: result.secure_url }
                await cloudinary.uploader.destroy(employeeImg?.image?.public_id)
            })
            .catch(err => console.log(err, 'err'))
        if (x) {
            req.body.image = x;
        }

    }
    const updatedImg = await employeesModel.findByIdAndUpdate(id, req.body, { new: true })
    return res.json({ mesage: "Done", updatedImg })
})